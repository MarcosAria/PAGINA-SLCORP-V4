 // Versión mejorada del preloader
  document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader-overlay');
    let resourcesLoaded = false;
    let minTimeElapsed = false;

    // Esperar al menos 3 segundos (puedes ajustar este tiempo)

    // Verificar cuando todos los recursos están cargados
    window.addEventListener('load', function() {
      resourcesLoaded = true;
      if(minTimeElapsed) {
        hidePreloader();
      }
    });

        setTimeout(() => {
      minTimeElapsed = true;
      if(resourcesLoaded) {
        hidePreloader();
      }
    }, 2000); // 3000ms = 3 segundos


    // Función para ocultar el preloader
    function hidePreloader() {
      preloader.classList.add('preloader-removed');
      setTimeout(() => {
        preloader.remove();
        // Forzar reflow para asegurar que se aplican los cambios
        void preloader.offsetWidth;
      }, 100);
    }

    // Fallback: por si acaso algo falla, ocultar después de 5 segundos máximo
    setTimeout(hidePreloader, 5000);
  });