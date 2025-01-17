import '../scss/style.scss';
import './sliders';
import './sidebar';
import './right_sidebar';


(function() {
  'use strict'
  // Button open brands
  const btnOpenBrands = document.querySelector('.open-brands-btn');
  const hiddenBrands = document.querySelectorAll('.hidden-md');
  const hiddenCartTech = document.querySelector('.hidden-tech-md');

  const btnBrandImg = document.getElementById('btn-brand-img');
  const btnBrandText = document.getElementById('btn-brand-text');
  const btnTechImg = document.getElementById('btn-tech-img');
  const btnTechText = document.getElementById('btn-tech-text');

  const openMobileText = document.querySelector('.content-container__paragraph-two--hidden-xs');
  const openMiddleText = document.querySelector('.content-container__paragraph-two--hidden-md');
  const buttonOpenText = document.querySelector('.content-container__buttn-more');
  const buttonMoreImg = document.querySelector('.content-container__button-more-img');
  const buttonMoreText = document.querySelector('.content-container__button-more-text');

  buttonOpenText.addEventListener('click', function() {
    openMobileText.classList.toggle('opened');
    openMiddleText.classList.toggle('opened');
    if (openMobileText.classList.contains('opened') || openMiddleText.classList.contains('opened')){
      buttonMoreText.textContent = 'Скрыть';
      buttonMoreImg.style.backgroundImage = 'url(../img/arrow-unvisible.svg)';
    } else {
      buttonMoreText.textContent = "Читать далее";
      buttonMoreImg.style.backgroundImage = 'url(../img/arrow-visible.svg)';
    }

  })

  btnOpenBrands.addEventListener('click', function(evt) {
    evt.preventDefault();

    hiddenBrands.forEach(brand => {

      if (brand.classList.contains('hidden-md')) {
        brand.classList.toggle('hidden-md');
        btnBrandText.textContent = 'Скрыть';
        this.style.width = '100px';
        btnBrandImg.style.backgroundImage = 'url(../img/arrow-unvisible.svg)';
      } else {
        brand.classList.toggle('hidden-md');
        btnBrandText.textContent = 'Показать всё';
        this.style.width = '134px';
        btnBrandImg.style.backgroundImage = 'url(../img/arrow-visible.svg)';
      }
    });
  });


  const btnHiddenTech = document.getElementById('btn-open-tech').addEventListener('click', function(){
    hiddenCartTech.classList.toggle('hidden-tech-md');
    if (hiddenCartTech.classList.contains('hidden-tech-md')) {
      btnTechText.textContent = 'Показать всё';
      this.style.width = '134px';
      btnTechImg.style.backgroundImage = 'url(../img/arrow-visible.svg)';
    } else {
      btnTechText.textContent = 'Скрыть';
      this.style.width = '100px';
      btnTechImg.style.backgroundImage = 'url(../img/arrow-unvisible.svg)';
    }
  });


})();
