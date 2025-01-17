(function() {
  'use strict';

  const sidebar = document.querySelector('.sidebar-container');
  const sidebarContainer = document.querySelector('.sidebar');
  const navItem = document.querySelectorAll('.navigation__list-item');
  const languageChangeItem = document.querySelectorAll('.language-change__item');
  const langButton = document.querySelectorAll('.language-change__radio');
  const openBtn = document.getElementById('open-menu-btn');


  openBtn.addEventListener('click', function() {
    sidebar.classList.remove('closed');
  });

  const closedBtn = document.getElementById('sidebar-closed');
  if (closedBtn) {
    closedBtn.addEventListener('click', function() {
      sidebar.classList.add('closed');
    });
  }

  if (sidebarContainer && sidebar) {
    sidebar.addEventListener('click', function(evt) {
      if (evt.target === this) {
        sidebar.classList.add('closed');
      }
    });
  };

  navItem.forEach(item => {
    item.addEventListener('click', function() {
      navItem.forEach(nav => nav.classList.remove('active-item'));
      item.classList.toggle('active-item');
    });
  });

  languageChangeItem.forEach((item, index) => {
    item.addEventListener('click', function() {
      langButton.forEach(btn => btn.checked = false);
      langButton[index].checked = true;

      languageChangeItem.forEach(item => item.classList.remove('item-changed'));
      item.classList.add('item-changed');
    });
  });

})();
