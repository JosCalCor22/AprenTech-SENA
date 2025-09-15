import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

import './styles/styles.css';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    fecha: '',
    password: '',
    terminos: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Formatear fecha especialmente
    if (name === 'fecha') {
      const formattedValue = formatDateInput(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    
    // Remover error cuando el usuario empiece a escribir/cambiar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
    
    // Remover error de términos cuando se marque el checkbox
    if (name === 'terminos' && checked && errors.terminos) {
      setErrors(prev => ({
        ...prev,
        terminos: null
      }));
    }
  };

  // Formatear input de fecha
  const formatDateInput = (value) => {
    let cleanValue = value.replace(/\D/g, '');
    
    if (cleanValue.length > 0) {
      if (cleanValue.length <= 2) {
        return cleanValue;
      } else if (cleanValue.length <= 4) {
        return cleanValue.slice(0, 2) + ' - ' + cleanValue.slice(2);
      } else {
        return cleanValue.slice(0, 2) + ' - ' + cleanValue.slice(2, 4) + ' - ' + cleanValue.slice(4, 8);
      }
    }
    
    return cleanValue;
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};
    
    // Validar nombre
    if (formData.nombre.trim() === '') {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    // Validar cédula
    if (formData.cedula.trim() === '') {
      newErrors.cedula = 'La cédula es requerida';
    } else if (!/^\d+$/.test(formData.cedula.trim())) {
      newErrors.cedula = 'La cédula debe contener solo números';
    }
    
    // Validar fecha
    if (formData.fecha.trim() === '') {
      newErrors.fecha = 'La fecha de nacimiento es requerida';
    }
    
    // Validar contraseña
    if (formData.password.trim() === '') {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }
    
    // Validar términos
    if (!formData.terminos) {
      newErrors.terminos = 'Debes aceptar los términos y condiciones';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      alert('Formulario enviado correctamente');
      // Reset form
      setFormData({
        nombre: '',
        cedula: '',
        fecha: '',
        password: '',
        terminos: false
      });
      // Redirect to login
      navigate('/login');
    }
  };

  // Manejar login con Google
  const handleGoogleLogin = () => {
    alert('Iniciando sesión con Google...');
  };

  // Manejar login con GitHub
  const handleGitHubLogin = () => {
    alert('Iniciando sesión con GitHub...');
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="illustration">
          <img src="src/assets/svg/cover.svg" alt="Ilustración de personas aprendiendo" />
        </div>
        <div className="left-content">
          <h1>Crece y conviértete en el profesional que la industria necesita</h1>
          <p>¡No dudes más! Ingresa y empieza aprender las habilidades que le mercado necesita</p>
        </div>
      </div>
      
      <div className="right-panel">
        <div className="form-container">
          <h2>Ingresa y aprende mientras creces profesionalmente</h2>
          
          <div className="social-login">
            <button className="social-btn google-btn" onClick={handleGoogleLogin}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Ingresa con Google
            </button>
            <button className="social-btn github-btn" onClick={handleGitHubLogin}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.24.73-.53v-1.85c-3.03.66-3.67-1.46-3.67-1.46-.5-1.27-1.21-1.6-1.21-1.6-.99-.68.07-.66.07-.66 1.09.08 1.67 1.12 1.67 1.12.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.69-1.45-2.42-.27-4.96-1.21-4.96-5.4 0-1.2.42-2.17 1.12-2.94-.11-.27-.49-1.38.11-2.87 0 0 .92-.3 3 1.12a10.4 10.4 0 015.5 0c2.08-1.42 3-1.12 3-1.12.6 1.49.22 2.6.11 2.87.7.77 1.12 1.74 1.12 2.94 0 4.2-2.55 5.13-4.98 5.4.39.34.74 1 .74 2.02v3c0 .29.19.63.74.53A11 11 0 0012 1.27"></path>
              </svg>
              Ingresa con GitHub
            </button>
          </div>
          
          <form id="registro-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre y Apellidos</label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                placeholder="Joseth Calderón" 
                value={formData.nombre}
                onChange={handleInputChange}
                className={errors.nombre ? 'error' : ''}
                required 
              />
              {errors.nombre && <div className="error-message">{errors.nombre}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="cedula">Cédula</label>
              <input 
                type="number" 
                id="cedula" 
                name="cedula" 
                placeholder="0000000000" 
                maxLength="10" 
                value={formData.cedula}
                onChange={handleInputChange}
                className={errors.cedula ? 'error' : ''}
                required 
              />
              {errors.cedula && <div className="error-message">{errors.cedula}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="fecha">Fecha de Nacimiento</label>
              <input 
                type="date" 
                id="fecha" 
                name="fecha" 
                placeholder="14 - 03 - 2004" 
                value={formData.fecha}
                onChange={handleInputChange}
                className={errors.fecha ? 'error' : ''}
                required 
              />
              {errors.fecha && <div className="error-message">{errors.fecha}</div>}
            </div>
            
            <div className="form-group password-group">
              <label htmlFor="password">Contraseña</label>
              <div className="password-container">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  id="password" 
                  name="password" 
                  placeholder="************" 
                  value={formData.password}
                  onChange={handleInputChange}
                  className={errors.password ? 'error' : ''}
                  required 
                />
                <button 
                  type="button" 
                  id="toggle-password" 
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {showPassword ? (
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </>
                    ) : (
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </>
                    )}
                  </svg>
                </button>
              </div>
              {errors.password && <div className="error-message">{errors.password}</div>}
            </div>
            
            <div className="form-group checkbox-group">
              <input 
                type="checkbox" 
                id="terminos" 
                name="terminos"
                checked={formData.terminos}
                onChange={handleInputChange}
                required 
              />
              <label htmlFor="terminos">Acepto términos y condiciones</label>
            </div>
            {errors.terminos && <div className="error-message">{errors.terminos}</div>}
            
            <button type="submit" className="btn-registrarme">Regístrarme</button>
          </form>
          
          <div className="login-link">
            <p>¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link></p>
          </div>
        </div>
      </div>
      
      <div className="chat-support">
        <button className="chat-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export { Signup };