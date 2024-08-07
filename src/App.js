import React from 'react';
import Navbar from './components/Navbar';
import GameSection from './components/GameSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <main className="main-content">
        <section className="intro-section">
          <img className="profile-picture" src="y.jpeg" alt="Perfil" />
          <div className="intro-text">
            <h1 className="intro-title" id="intro-title">Alex Henry Cid</h1>
            <p className="intro-subtitle">Infraestructura Cloud, DevOps, Developer & FullStack</p>
          </div>
        </section>
        <GameSection />
        <section id="about" className="info-section">
          <h2>Sobre Mi</h2>
          <p>Aquí puedes agregar contenido sobre ti o la página web.</p>
        </section>
        <section id="portfolio" className="info-section">
          <h2>Portafolio Web</h2>
          <p>Aquí puedes agregar tu portafolio de proyectos web.</p>
        </section>
        <section id="github" className="info-section">
          <h2>GitHub</h2>
          <p>Aquí puedes agregar un enlace a tu perfil de GitHub.</p>
        </section>
        <section id="devops" className="info-section">
          <h2>DevOps</h2>
          <p>Aquí puedes agregar contenido relacionado con tus habilidades en DevOps.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
