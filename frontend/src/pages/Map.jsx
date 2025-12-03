import NavBar from '../components/NavBar.jsx';
import Mapa from '../components/Map.jsx';

export default function MapaPage() {
  return (
	<div className="min-h-screen flex flex-col">
	  <NavBar />
      <Mapa />
    </div>
  );
}