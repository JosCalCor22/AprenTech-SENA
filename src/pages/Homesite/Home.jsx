import { useEffect } from 'react';
import { Link } from 'react-router'; 

import './styles/styles.css';

function Home() {
  // Hook para manejar los efectos del DOM (equivalente a DOMContentLoaded)
  useEffect(() => {
    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });

    // Cleanup function para remover event listeners
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
      
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', function() {});
        button.removeEventListener('mouseleave', function() {});
      });
    };
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <figure className="logo">
            <img src="src/assets/svg/logo.svg" alt="Logo AprenTech" />
          </figure>
          <div className="auth-buttons">
            <button className="btn btn-light">
              <Link to="/login">Iniciar Sesión</Link>
            </button>
            <button className="btn btn-primary">
              <Link to="/signup">Regístrate</Link>
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Impulsa tu Carrera con Conocimiento Experto.</h1>
            <p>Accede a cursos de vanguardia, obtén certificaciones reconocidas y conecta con una comunidad de profesionales y educadores.</p>
            <button className="btn btn-primary">
              <Link to="/login">Explora Cursos <span className="arrow">→</span></Link>
            </button>
          </div>
          <div className="hero-image">
            <img src="https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Teclado con iluminación azul y púrpura" />
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-image">
            <img src="https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Persona viendo clase en línea" />
          </div>
          <div className="content-text">
            <h2>Contenido Diverso y de Calidad</h2>
            <p>Aprende a través de una variedad de formatos: videos explicativos, infografía detallada, textos concisos y recursos descargables.</p>
            <button className="btn btn-primary">
              <Link to="/login">Pruébalo <span className="arrow">→</span></Link>
            </button>
          </div>
        </div>
      </section>

      <section className="learning-paths">
        <div className="container">
          <div className="learning-text">
            <h2>Rutas de Aprendizaje Estructuradas</h2>
            <p>Sigue itinerarios académicos diseñados por expertos para dominar áreas clave de tu profesión, desde los fundamentos hasta las especializaciones.</p>
            <button className="btn btn-primary">
              <Link to="/login">Empieza Ahora <span className="arrow">→</span></Link>
            </button>
          </div>
          <div className="learning-image">
            <img src="https://images.pexels.com/photos/268362/pexels-photo-268362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Planos y diseños estructurados" />
          </div>
        </div>
      </section>

      <section className="ai-tutor">
        <div className="container">
          <div className="tutor-content">
            <h2>Tu Tutor IA Siempre Disponible.</h2>
            <p>Resuelve tus dudas al instante y profundiza en cualquier tema con nuestro asistente virtual inteligente.</p>
            <button className="btn btn-light">
              <Link to="/login">Inicia Hoy <span className="arrow">→</span></Link>
            </button>
          </div>
          <div className="tutor-image">
            <img src="https://images.pexels.com/photos/594233/pexels-photo-594233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Representación visual de inteligencia artificial" />
          </div>
        </div>
      </section>

      <section className="academic-support">
        <div className="container">
          <div className="support-image">
            <img src="https://images.pexels.com/photos/17485657/pexels-photo-17485657/free-photo-of-abstracto-resumen-tecnologia-investigacion.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Representación visual de soporte académico" />
          </div>
          <div className="support-text">
            <h2>Soporte Académico Inteligente</h2>
            <p>Interactúa con un tutor basado en Inteligencia Artificial, diseñado para responder tus preguntas sobre el contenido del curso y temas relacionados, 24/7.</p>
            <button className="btn btn-primary">
              <Link to="/login">Inicia Ahora <span className="arrow">→</span></Link>
            </button>
          </div>
        </div>
      </section>

      <section className="learning-process">
        <div className="container">
          <div className="process-content">
            <h2>Tu Aprendizaje, Tu Proceso</h2>
            <p>Accede a la plataforma desde cualquier dispositivo, en cualquier momento. (Imágenes de dispositivos: laptop, tablet, teléfono)</p>
            <button className="btn btn-light">
              <Link to="/login">Únete Hoy <span className="arrow">→</span></Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export { Home };