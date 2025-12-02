import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Leaflet
import "leaflet/dist/leaflet.css";

// Pages
import MapaPage from './pages/Map.jsx';

// Components
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <main className="grow">
          <Routes>
            <Route path="/" element={
			  <div className="min-h-screen flex flex-col">
                <div className="grow"></div>
                <Footer />
              </div>
			} />
			<Route path="/mapa" element={<MapaPage />} />
		  </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
