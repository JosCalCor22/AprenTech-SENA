document.addEventListener('DOMContentLoaded', function() {
  // Toggle password visibility
  const togglePassword = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('password');
  
  togglePassword.addEventListener('click', function() {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      
      // Change the eye icon
      const eyeIcon = togglePassword.querySelector('svg');
      if (type === 'text') {
          eyeIcon.innerHTML = `
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
          `;
      } else {
          eyeIcon.innerHTML = `
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
          `;
      }
  });
  
  // Form validation
  const form = document.getElementById('registro-form');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      let isValid = true;
      
      // Validate name
      const nombre = document.getElementById('nombre');
      if (nombre.value.trim() === '') {
          showError(nombre, 'El nombre es requerido');
          isValid = false;
      } else {
          removeError(nombre);
      }
      
      // Validate cedula
      const cedula = document.getElementById('cedula');
      if (cedula.value.trim() === '') {
          showError(cedula, 'La cédula es requerida');
          isValid = false;
      } else if (!/^\d+$/.test(cedula.value.trim())) {
          showError(cedula, 'La cédula debe contener solo números');
          isValid = false;
      } else {
          removeError(cedula);
      }
      
      // Validate date
      const fecha = document.getElementById('fecha');
      if (fecha.value.trim() === '') {
          showError(fecha, 'La fecha de nacimiento es requerida');
          isValid = false;
      } else {
          removeError(fecha);
      }
      
      // Validate password
      const password = document.getElementById('password');
      if (password.value.trim() === '') {
          showError(password, 'La contraseña es requerida');
          isValid = false;
      } else if (password.value.length < 8) {
          showError(password, 'La contraseña debe tener al menos 8 caracteres');
          isValid = false;
      } else {
          removeError(password);
      }
      
      // Validate terms
      const terminos = document.getElementById('terminos');
      if (!terminos.checked) {
          const terminosGroup = document.querySelector('.checkbox-group');
          terminosGroup.insertAdjacentHTML('afterend', '<div class="error-message">Debes aceptar los términos y condiciones</div>');
          isValid = false;
      } else {
          const errorMessage = document.querySelector('.checkbox-group + .error-message');
          if (errorMessage) {
              errorMessage.remove();
          }
      }
      
      if (isValid) {
          // Here you would typically send the form data to your server
          alert('Formulario enviado correctamente');
          form.reset();
          window.location.href = '/Login/login.html';
      }
  });
  
  // Format date input
  const fechaInput = document.getElementById('fecha');
  fechaInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      
      if (value.length > 0) {
          if (value.length <= 2) {
              value = value;
          } else if (value.length <= 4) {
              value = value.slice(0, 2) + ' - ' + value.slice(2);
          } else {
              value = value.slice(0, 2) + ' - ' + value.slice(2, 4) + ' - ' + value.slice(4, 8);
          }
          
          e.target.value = value;
      }
  });
  
  // Helper functions for validation
  function showError(input, message) {
      input.classList.add('error');
      
      // Remove existing error message if any
      const existingError = input.parentElement.querySelector('.error-message');
      if (existingError) {
          existingError.remove();
      }
      
      // Add new error message
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;
      
      if (input.id === 'password') {
          input.parentElement.parentElement.appendChild(errorDiv);
      } else {
          input.parentElement.appendChild(errorDiv);
      }
  }
  
  function removeError(input) {
      input.classList.remove('error');
      
      let errorElement;
      if (input.id === 'password') {
          errorElement = input.parentElement.parentElement.querySelector('.error-message');
      } else {
          errorElement = input.parentElement.querySelector('.error-message');
      }
      
      if (errorElement) {
          errorElement.remove();
      }
  }
  
  // Social login buttons
  const googleBtn = document.querySelector('.google-btn');
  const githubBtn = document.querySelector('.github-btn');
  
  googleBtn.addEventListener('click', function() {
      // Implement Google login logic
      alert('Iniciando sesión con Google...');
  });
  
  githubBtn.addEventListener('click', function() {
      // Implement GitHub login logic
      alert('Iniciando sesión con GitHub...');
  });
});