document.addEventListener('DOMContentLoaded', () => {
  // initial sliders 
  window.addEventListener('resize', function() {
    if(this.window.innerWidth >= 320 && this.window.innerWidth <= 400) {
      const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 1,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    }
  })



});
