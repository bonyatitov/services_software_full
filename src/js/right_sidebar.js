(function() {
  'use strict'

  const rightContainer = document.querySelector('.right-container');
  const rightSidebar = document.querySelector('.right-sidebar');
  const buttonPhoneMenu = document.querySelector('.contacts__link-phone');
  const sidebar = document.querySelector('.sidebar-container');
  const buttonPhone = document.getElementById('button-phone');
  
  if (rightSidebar && rightContainer) {
    rightContainer.addEventListener('click', function(evt) {
      if (evt.target === this) {
        this.classList.add('closed');
      }
    });
  };


  const closedBtn = document.getElementById('right-sidebar-closed');
  if (closedBtn) {
    closedBtn.addEventListener('click', function() {
      rightContainer.classList.add('closed');
    });
  }


  buttonPhone.addEventListener('click', function() {
    rightContainer.classList.remove('closed');
  });

  buttonPhoneMenu.addEventListener('click', function() {
    sidebar.classList.add('closed');
    rightContainer.classList.remove('closed');
  });


})();
