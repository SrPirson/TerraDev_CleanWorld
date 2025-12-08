import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import envasesRaw from '../components/json/envases.json';
import vidrioRaw from '../components/json/vidrio.json';
import papelcartonRaw from '../components/json/papelcarton.json';
import aceiteRaw from '../components/json/aceite.json';
import pilasRaw from '../components/json/pilas.json';
import ropaRaw from '../components/json/ropa.json';
import residuosRaw from '../components/json/residuos.json';
import industriaRaw from '../components/json/industria.json';

import { convertGeoJSON } from '../components/json/convertGeoJSON.js';

import NavBar from '../components/NavBar.jsx';
import Mapa from '../components/Map.jsx';
import RecyclingMenu from '../components/RecyclingMenu.jsx';
import ReportModal from '../components/ReportModal.jsx';

export default function MapPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [reportCoords, setReportCoords] = useState(null);
    const [reports, setReports] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const isReportMode = searchParams.get("report") === "true";

    // Cargar los reports solo una vez al montar
    useEffect(() => {
        const allRaw = [
            { data: envasesRaw, category: 'envases' },
            { data: vidrioRaw, category: 'vidrio' },
            { data: papelcartonRaw, category: 'papel' },
            { data: aceiteRaw, category: 'aceite' },
            { data: pilasRaw, category: 'pilas' },
            { data: ropaRaw, category: 'ropa' },
            { data: residuosRaw, category: 'restos' },
            { data: industriaRaw, category: 'industria' }
        ];

        const allFeatures = allRaw.flatMap(raw =>
            convertGeoJSON(raw.data).features.map(f => ({
                id: f.id,
                latitude: f.latitude,
                longitude: f.longitude,
                tooltip: f.properties.tooltip,
                residuo: raw.category,
                severity: f.properties.severity || 1
            }))
        );

        // Evitar warning de setState en efecto
        setTimeout(() => setReports(allFeatures), 0);

    }, []);

    const handleMapClick = (latlng) => {
        if (isReportMode) {
            setReportCoords(latlng);
            setSearchParams({});
        }
    };

    const handleCloseReport = () => {
        setReportCoords(null);
    };

    const handleSubmitReport = (report) => {
        setReports(prev => [...prev, report]);
        setReportCoords(null);
    };

    // Filtrar reports según las categorías seleccionadas
    const filteredReports = selectedCategories.length > 0
        ? reports.filter(r => selectedCategories.includes(r.residuo))
        : [];

    return (
        <div className="h-screen flex flex-col">
            <NavBar />
            <div className="flex-1 relative">
                <Mapa
                    onMapClick={handleMapClick}
                    reportCoords={reportCoords}
                    isReportMode={isReportMode}
                    reports={filteredReports}
                />
                <RecyclingMenu
                    selected={selectedCategories}
                    onToggleCategory={setSelectedCategories}
                />
                <ReportModal
                    isReportMode={isReportMode}
                    reportCoords={reportCoords}
                    onClose={handleCloseReport}
                    onSubmit={handleSubmitReport}
                />
            </div>
        </div>
    );
}
