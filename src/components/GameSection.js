import React, { useEffect, useRef, useState } from 'react';
import './GameSection.css';

function GameSection() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const spaceshipSpeed = 5;
  let asteroidInterval;

  // Definición de los asteroides y la nave espacial fuera del useEffect para un acceso global
  let asteroids = [];
  const spaceship = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
  };

  // Cargar la imagen de la nave espacial
  const spaceshipImage = new Image();
  spaceshipImage.src = `${process.env.PUBLIC_URL}/nav.png`; // Ruta de la imagen de la nave espacial

  // Función para crear asteroides
  const createAsteroid = () => {
    const canvas = canvasRef.current;
    const size = Math.random() * 30 + 20;
    asteroids.push({
      x: Math.random() * canvas.width,
      y: -size,
      radius: size / 2,
      speed: Math.random() * 2 + 1,
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const background = new Image();
    background.src = `${process.env.PUBLIC_URL}/esp.jpg`; // Ruta de la imagen de fondo

    let animationFrameId;
    let gameOver = false;

    // Inicializar la posición de la nave espacial en el centro inferior del canvas
    spaceship.x = canvas.width / 2 - spaceship.width / 2;
    spaceship.y = canvas.height - spaceship.height - 10;

    // Función para dibujar la nave espacial usando la imagen cargada
    const drawSpaceship = () => {
      context.drawImage(spaceshipImage, spaceship.x, spaceship.y, spaceship.width, spaceship.height);
    };

    // Función para dibujar los asteroides
    const drawAsteroids = () => {
      context.fillStyle = 'orange';
      asteroids.forEach((asteroid, index) => {
        context.beginPath();
        context.arc(asteroid.x, asteroid.y, asteroid.radius, 0, Math.PI * 2);
        context.fill();

        asteroid.y += asteroid.speed;

        // Eliminar asteroides que salen de la pantalla
        if (asteroid.y - asteroid.radius > canvas.height) {
          asteroids.splice(index, 1);
          setScore(score => score + 1); // Incrementar la puntuación
        }

        // Comprobar colisión con la nave
        if (
          spaceship.x < asteroid.x + asteroid.radius &&
          spaceship.x + spaceship.width > asteroid.x - asteroid.radius &&
          spaceship.y < asteroid.y + asteroid.radius &&
          spaceship.y + spaceship.height > asteroid.y - asteroid.radius
        ) {
          gameOver = true;
        }
      });
    };

    // Función para actualizar el juego
    const updateGame = () => {
      if (gameOver) {
        setIsPlaying(false);
        alert(`Game Over! Your score: ${score}`);
        return;
      }

      if (isPlaying && !isPaused) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(background, 0, 0, canvas.width, canvas.height); // Dibujar fondo
        drawSpaceship(); // Dibujar la nave espacial
        drawAsteroids(); // Dibujar los asteroides
      }

      animationFrameId = requestAnimationFrame(updateGame);
    };

    // Asegurarse de que la imagen de fondo y la nave espacial estén cargadas antes de usarlas
    background.onload = () => {
      if (isPlaying) {
        updateGame();
      }
    };

    // Manejo de eventos de teclado para mover la nave espacial
    const handleKeyDown = (e) => {
      if (isPlaying && !isPaused) {
        if (e.key === 'ArrowLeft') {
          spaceship.x = Math.max(spaceship.x - spaceshipSpeed, 0);
        } else if (e.key === 'ArrowRight') {
          spaceship.x = Math.min(spaceship.x + spaceshipSpeed, canvas.width - spaceship.width);
        } else if (e.key === 'ArrowUp') {
          spaceship.y = Math.max(spaceship.y - spaceshipSpeed, 0);
        } else if (e.key === 'ArrowDown') {
          spaceship.y = Math.min(spaceship.y + spaceshipSpeed, canvas.height - spaceship.height);
        }
      }
    };

    // Añadir eventos y limpiar en la salida
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animationFrameId);
      clearInterval(asteroidInterval);
    };
  }, [isPlaying, isPaused]);

  // Función para iniciar el juego
  const startGame = () => {
    setIsPlaying(true);
    setIsPaused(false);
    setScore(0);
    // Iniciar la creación de asteroides
    asteroidInterval = setInterval(createAsteroid, 1000); // Crear un asteroide cada segundo
  };

  // Función para pausar el juego
  const pauseGame = () => {
    setIsPaused(true);
    clearInterval(asteroidInterval);
  };

  // Efecto para manejar la creación de asteroides cuando el juego está en marcha o en pausa
  useEffect(() => {
    if (isPlaying && !isPaused) {
      asteroidInterval = setInterval(createAsteroid, 1000); // Crear un asteroide cada segundo
    } else {
      clearInterval(asteroidInterval);
    }
  }, [isPlaying, isPaused]);

  return (
    <div className="game-container">
      <canvas ref={canvasRef} width={800} height={600} />
      <div className="score">Score: {score}</div>
      <div className="controls">
        <button className="control-button" onClick={startGame}>Jugar</button>
        <button className="control-button" onClick={pauseGame}>Pausa</button>
      </div>
    </div>
  );
}

export default GameSection;



