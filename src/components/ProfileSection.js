import React from 'react';
import './ProfileSection.css';

function ProfileSection() {
  return (
    <div className="profile-section">
      <img src="ruta-de-tu-imagen.jpg" alt="Perfil" className="profile-image" />
      <div className="profile-description">
        <h2>Nombre del Usuario</h2>
        <p>
          Aquí va tu presentación personal. Puedes hablar sobre tu experiencia, tus habilidades y
          cualquier otra cosa que quieras compartir.
        </p>
      </div>
    </div>
  );
}

export default ProfileSection;
