import React from 'react';
import Navbar from './components/Navbar'; // Componente de la barra de navegación
import GameSection from './components/GameSection'; // Componente del juego
import Footer from './components/Footer'; // Componente del pie de página
import './App.css'; // Importación del archivo CSS

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Barra de navegación fija en la parte superior */}
      <main className="main-content">
        {/* Sección principal del contenido del juego y demás secciones */}
        <GameSection /> {/* Componente del juego */}
        <section className="info-section">
          <h2>Sobre Mi</h2>
          <p>Aquí puedes agregar contenido sobre ti o la página web.</p>
        </section>
      </main>
      <Footer /> {/* Pie de página para información adicional o enlaces */}
    </div>
  );
}

export default App;

