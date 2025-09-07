document.addEventListener('DOMContentLoaded', function() {
  // Toggle sidebar on mobile
  const toggleSidebar = document.createElement('button');
  toggleSidebar.className = 'toggle-sidebar';
  toggleSidebar.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
  `;
  
  document.querySelector('.main-content').prepend(toggleSidebar);
  
  toggleSidebar.addEventListener('click', function() {
      document.querySelector('.sidebar').classList.toggle('show');
  });
  
  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', function(event) {
      const sidebar = document.querySelector('.sidebar');
      const toggleBtn = document.querySelector('.toggle-sidebar');
      
      if (window.innerWidth <= 768) {
          if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
              sidebar.classList.remove('show');
          }
      }
  });
  
  // Add hover effect to buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-2px)';
      });
      
      button.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
      });
  });
  
  // Add click effect to menu items
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
      item.addEventListener('click', function(e) {
          // Remove active class from all menu items
          menuItems.forEach(i => i.classList.remove('active'));
          
          // Add active class to clicked item
          this.classList.add('active');
          
          // Prevent default behavior if it's just for demo
          e.preventDefault();
      });
  });
  
  // Add click effect to school cards
  const schoolCards = document.querySelectorAll('.school-card');
  schoolCards.forEach(card => {
      card.addEventListener('click', function() {
          // Add a pulse animation
          this.style.animation = 'pulse 0.5s';
          setTimeout(() => {
              this.style.animation = '';
          }, 500);
      });
  });
  
  // Add click effect to add goal button
  const addGoalBtn = document.querySelector('.add-goal');
  addGoalBtn.addEventListener('click', function() {
      alert('Funcionalidad para añadir nueva meta próximamente');
  });
  
  // Add CSS for mobile toggle and animations
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
});