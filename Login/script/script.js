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
  const form = document.getElementById('login-form');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      let isValid = true;
      
      // Validate email
      const correo = document.getElementById('correo');
      if (correo.value.trim() === '') {
          showError(correo, 'El correo es requerido');
          isValid = false;
      } else if (!isValidEmail(correo.value.trim())) {
          showError(correo, 'Ingresa un correo válido');
          isValid = false;
      } else {
          removeError(correo);
      }
      
      // Validate password
      const password = document.getElementById('password');
      if (password.value.trim() === '') {
          showError(password, 'La contraseña es requerida');
          isValid = false;
      } else {
          removeError(password);
      }
      
      if (isValid) {
          // Here you would typically send the form data to your server for authentication
          simulateLogin();
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
  
  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
  
  // Simulate login process
  function simulateLogin() {
      const loginBtn = document.querySelector('.btn-ingresa');
      const originalText = loginBtn.textContent;
      
      // Show loading state
      loginBtn.textContent = 'Iniciando sesión...';
      loginBtn.disabled = true;
      
      // Simulate API call delay
      setTimeout(function() {
          // Reset button
          loginBtn.textContent = originalText;
          loginBtn.disabled = false;
          
          // Redirect to dashboard or show success message
          alert('Inicio de sesión exitoso. Redirigiendo al dashboard...');
          window.location.href = '/Dashboard/dashboard.html'; // Uncomment to redirect
      }, 1500);
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
  
  // Remember me functionality
  const rememberMeCheckbox = document.getElementById('recuerdame');
  
  // Check if there's a saved email in localStorage
  const savedEmail = localStorage.getItem('rememberedEmail');
  if (savedEmail) {
      document.getElementById('correo').value = savedEmail;
      rememberMeCheckbox.checked = true;
  }
  
  // Save email to localStorage if remember me is checked
  form.addEventListener('submit', function() {
      const email = document.getElementById('correo').value;
      
      if (rememberMeCheckbox.checked) {
          localStorage.setItem('rememberedEmail', email);
      } else {
          localStorage.removeItem('rememberedEmail');
      }
  });
});