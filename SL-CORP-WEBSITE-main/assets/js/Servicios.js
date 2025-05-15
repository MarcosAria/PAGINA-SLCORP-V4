document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Swiper
    var swiper = new Swiper('.news-slider', {
      effect: 'slide',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 'auto',
      speed: 400,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false
      },
      navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
      },
      pagination: {
        el: '.news-slider__pagination',
        clickable: true,
        renderBullet: function(index, className) {
          return '<span class="' + className + '"></span>';
        }
      },
      on: {
        init: function() {
          activateCurrentSlide();
        }
      }
    });
  
    // Activar el slide actual
    function activateCurrentSlide() {
      // Remover clase 'active' de todos los slides
      document.querySelectorAll('.news__item').forEach(function(item) {
        item.classList.remove('active');
      });
      
      // Agregar clase 'active' al slide visible
      var activeSlide = document.querySelector('.swiper-slide-active .news__item');
      if (activeSlide) {
        activeSlide.classList.add('active');
      }
    }
  
    // Manejar eventos del slider
    swiper.on('slideChange', function() {
      // Remover clase 'active' durante la transición
      document.querySelectorAll('.news__item').forEach(function(item) {
        item.classList.remove('active');
      });
    });
  
    swiper.on('slideChangeTransitionEnd', function() {
      // Agregar clase 'active' cuando termina la transición
      activateCurrentSlide();
    });
  
    // También activar con navegación por teclado/touch
    swiper.on('touchEnd', function() {
      activateCurrentSlide();
    });
  
    // Manejar hover para dispositivos con mouse
    if (window.matchMedia("(hover: hover)").matches) {
      document.querySelectorAll('.news__item').forEach(function(item) {
        item.addEventListener('mouseenter', function() {
          // Solo activar hover si no es el slide activo
          if (!this.classList.contains('active')) {
            this.classList.add('highlighted');
          }
        });
        
        item.addEventListener('mouseleave', function() {
          this.classList.remove('highlighted');
        });
      });
    }
  
    // Ajustar slider al redimensionar la ventana
    window.addEventListener('resize', function() {
      swiper.update();
    });
  });