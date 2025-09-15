import { useState, useEffect } from 'react';
import { Link } from 'react-router';

import './styles/styles.css';

function Dashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState('Resumen');
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // useEffect para agregar estilos dinámicos y efectos
  useEffect(() => {
    // Agregar estilos para animaciones y responsive
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
      }
      
      .toggle-sidebar {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          margin-bottom: 15px;
      }
      
      @media (max-width: 768px) {
          .sidebar {
              transform: translateX(-100%);
              transition: transform 0.3s ease;
              z-index: 1000;
          }
          
          .sidebar.show {
              transform: translateX(0);
          }
          
          .toggle-sidebar {
              display: block;
          }
          
          .main-content {
              margin-left: 0;
          }
      }
    `;
    document.head.appendChild(style);

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('button');
    const handleMouseEnter = function() {
      this.style.transform = 'translateY(-2px)';
    };
    
    const handleMouseLeave = function() {
      this.style.transform = 'translateY(0)';
    };

    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup function
    return () => {
      document.head.removeChild(style);
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // useEffect para manejar clicks fuera del sidebar en mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.sidebar');
      const toggleBtn = document.querySelector('.toggle-sidebar');
      
      if (window.innerWidth <= 768) {
        if (sidebar && toggleBtn && !sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
          setSidebarVisible(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Toggle sidebar en mobile
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Manejar click en items del menu
  const handleMenuItemClick = (itemName) => {
    setActiveMenuItem(itemName);
  };

  // Manejar click en school cards
  const handleSchoolCardClick = (schoolName) => {
    alert(`Redirigiendo a ${schoolName}...`);
  };

  // Manejar click en add goal
  const handleAddGoalClick = () => {
    alert('Funcionalidad para añadir nueva meta próximamente');
  };

  // Animar school card
  const animateSchoolCard = (event) => {
    event.currentTarget.style.animation = 'pulse 0.5s';
    setTimeout(() => {
      event.currentTarget.style.animation = '';
    }, 500);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarVisible ? 'show' : ''}`}>
        <div className="logo">
          <Link to="/">
            <img src="src/assets/svg/logo-purple.svg" alt="Logo AprenTech" />
          </Link>
        </div> 
        
        <nav className="sidebar-menu">
          <a 
            href="#" 
            className={`menu-item ${activeMenuItem === 'Resumen' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick('Resumen');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Resumen
          </a>
          <a 
            href="#" 
            className={`menu-item ${activeMenuItem === 'Mis Cursos' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick('Mis Cursos');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Mis Cursos
          </a>
          <a 
            href="#" 
            className={`menu-item ${activeMenuItem === 'Progreso' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick('Progreso');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            Progreso
          </a>
          <a 
            href="#" 
            className={`menu-item ${activeMenuItem === 'Certificaciones' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick('Certificaciones');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            Certificaciones
          </a>
          <a 
            href="#" 
            className={`menu-item ${activeMenuItem === 'Tutor IA' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick('Tutor IA');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Tutor IA
          </a>
          <a 
            href="#" 
            className={`menu-item ${activeMenuItem === 'Soporte' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick('Soporte');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            Soporte
          </a>
        </nav>
        
        <div className="sidebar-footer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
          <p>Estamos trabajando para añadir más características</p>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="main-content">
        {/* Toggle Sidebar Button */}
        <button className="toggle-sidebar" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-title">
            <h1>Tu Progreso Académico</h1>
            <p>Un vistazo rápido a tus logros y actividad reciente en la plataforma.</p>
          </div>
          <div className="header-actions">
            <button className="notification-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </button>
            <div className="user-profile">
              <div className="avatar">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Andrew" />
              </div>
              <div className="user-info">
                <h4>Andrew</h4>
                <p>Admin account</p>
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Courses Section */}
          <section className="courses-section">
            {/* Course Card 1 */}
            <div className="course-card">
              <div className="card-header">
                <h3>General</h3>
              </div>
              <div className="card-content">
                <div className="course-info">
                  <h2>Lógica de promación básica</h2>
                  <p>Analiza y entiende como la lógica puede ser muy útil al momento de programar. Entiende los conceptos, realiza proyectos y pule tu habilidad.</p>
                  <button className="btn-continua">
                    Continúa
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
                <div className="course-stats">
                  <div className="stat">
                    <h3>12</h3>
                    <p>Clases</p>
                  </div>
                  <div className="stat">
                    <h3>20</h3>
                    <p>Horas de Contenido</p>
                  </div>
                  <div className="stat">
                    <h3>4.5</h3>
                    <p>Calificación</p>
                  </div>
                </div>
              </div>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress" style={{width: '60%'}}></div>
                </div>
                <p>Progreso de tu curso</p>
              </div>
            </div>
            
            {/* Course Card 2 */}
            <div className="course-card">
              <div className="card-header">
                <h3>General</h3>
              </div>
              <div className="card-content">
                <div className="course-info">
                  <h2>Diseño UI/UX para iniciantes</h2>
                  <p>Entender como un usuario interactúa con una página web es fundamental. El diseño UI/UX te permite crear una experiencia satisfactoria para el usuario. Aprende los fundamentos para elaborar interfaces únicas.</p>
                  <button className="btn-continua">
                    Continúa
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
                <div className="course-stats">
                  <div className="stat">
                    <h3>15</h3>
                    <p>Clases</p>
                  </div>
                  <div className="stat">
                    <h3>30</h3>
                    <p>Horas de Contenido</p>
                  </div>
                  <div className="stat">
                    <h3>4.7</h3>
                    <p>Calificación</p>
                  </div>
                </div>
              </div>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress" style={{width: '40%'}}></div>
                </div>
                <p>Progreso de tu curso</p>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="course-card">
              <div className="card-header">
                <h3>General</h3>
              </div>
              <div className="card-content">
                <div className="course-info">
                  <h2>Aprende hablar en público</h2>
                  <p>Aprende a hablar en pública con una voz natural y una pronunciación correcta. Esta habilidad es necesario no solo cuando tienes que hablar con desconocidos, sino también cuando tienes que hablar con tus clientes.</p>
                  <button className="btn-continua">
                    Continúa
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
                <div className="course-stats">
                  <div className="stat">
                    <h3>8</h3>
                    <p>Clases</p>
                  </div>
                  <div className="stat">
                    <h3>10</h3>
                    <p>Horas de Contenido</p>
                  </div>
                  <div className="stat">
                    <h3>4.2</h3>
                    <p>Calificación</p>
                  </div>
                </div>
              </div>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress" style={{width: '90%'}}></div>
                </div>
                <p>Progreso de tu curso</p>
              </div>
            </div>
          </section>
          
          {/* Right Sidebar */}
          <aside className="right-sidebar">
            {/* Goals Section */}
            <section className="goals-section">
              <h2>Metas</h2>
              <div className="goals-container">
                <div className="goal-card">
                  <div className="goal-content">
                    <h3>Debo de finalizar el curso y obtener la certificación</h3>
                    <p className="goal-date">13 - 05 - 2025</p>
                  </div>
                  <button className="goal-action">Finalizar Curso</button>
                </div>
                
                <div className="goal-card">
                  <div className="goal-content">
                    <h3>Estudiar para presentar examen del curso</h3>
                    <p className="goal-date">13 - 05 - 2025</p>
                  </div>
                  <button className="goal-action">Preparación</button>
                </div>
                
                <div className="add-goal" onClick={handleAddGoalClick}>
                  <div className="add-goal-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                  <p>Crea una nueva meta</p>
                </div>
              </div>
            </section>
            
            {/* Performance Section */}
            <section className="performance-section">
              <h2>Rendimiento en Evaluaciones</h2>
              
              <div className="performance-item">
                <div className="performance-header">
                  <div className="performance-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  <p>Habilidades Técnicas</p>
                </div>
                <div className="performance-bar-container">
                  <div className="performance-bar">
                    <div className="performance-progress" style={{width: '52%'}}></div>
                  </div>
                  <span className="performance-percentage">52%</span>
                </div>
              </div>
              
              <div className="performance-item">
                <div className="performance-header">
                  <div className="performance-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <p>Gestión de Proyectos</p>
                </div>
                <div className="performance-bar-container">
                  <div className="performance-bar">
                    <div className="performance-progress" style={{width: '75%'}}></div>
                  </div>
                  <span className="performance-percentage">75%</span>
                </div>
              </div>
              
              <div className="performance-item">
                <div className="performance-header">
                  <div className="performance-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <p>Comunicación Profesional</p>
                </div>
                <div className="performance-bar-container">
                  <div className="performance-bar">
                    <div className="performance-progress" style={{width: '35%'}}></div>
                  </div>
                  <span className="performance-percentage">35%</span>
                </div>
              </div>
            </section>
            
            {/* Schools Section */}
            <section className="schools-section">
              <div 
                className="school-card ai-school"
                onClick={(e) => {
                  animateSchoolCard(e);
                  handleSchoolCardClick('Escuela de Inteligencia Artificial');
                }}
              >
                <h3>Escuela de Inteligencia Artificial</h3>
              </div>
              <div 
                className="school-card product-school"
                onClick={(e) => {
                  animateSchoolCard(e);
                  handleSchoolCardClick('Escuela de Product Management');
                }}
              >
                <h3>Escuela de Product Management</h3>
              </div>
              <div 
                className="school-card web-school"
                onClick={(e) => {
                  animateSchoolCard(e);
                  handleSchoolCardClick('Escuela de Desarrollo Web');
                }}
              >
                <h3>Escuela de Desarrollo Web</h3>
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}

export { Dashboard };