import React from 'react';
import Navbar from './components/Navbar'; // Asegúrate de tener este componente creado
import GameSection from './components/GameSection';
import Footer from './components/Footer'; // Si tienes un pie de página u otros componentes
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <GameSection />
        {/* Puedes agregar más secciones aquí */}
        <section className="info-section">
          <h2>Sobre Mi</h2>
          <p>Aquí puedes agregar contenido sobre ti o la página web.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
