(function() {
  'use strict'

  const rightContainer = document.querySelector('.right-container');
  const rightSidebar = document.querySelector('.right-sidebar');
  const buttonPhoneMenu = document.querySelector('.contacts__link-phone');
  const sidebar = document.querySelector('.sidebar-container');
  const buttonPhone = document.getElementById('button-phone');
  const collBackBtn = document.querySelectorAll('.call_back');
  const form = document.querySelector('.form');
  const formLabel = form.querySelectorAll('.form__label');
  const headerHeading = document.querySelector('.header__heading');


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
    formLabel.forEach(label => {label.classList.remove('closed')});
    headerHeading.textContent = 'Обратная связь';
    rightContainer.classList.remove('closed');
  });

  buttonPhoneMenu.addEventListener('click', function() {
    formLabel.forEach(label => {label.classList.remove('closed')});
    headerHeading.textContent = 'Обратная связь';
    sidebar.classList.add('closed');
    rightContainer.classList.remove('closed');
  });


  collBackBtn.forEach(btn => {
    btn.addEventListener('click', function() {
      sidebar.classList.add('closed');
      rightContainer.classList.remove('closed');
      headerHeading.textContent = 'Заказать звонок';
      formLabel.forEach(label => {label.classList.add('closed')});
    });
  });


})();
