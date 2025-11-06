// Seleccionamos el formulario
    const form = document.querySelector('form');
    const successMessage = document.getElementById('successMessage');

    // Agregamos el evento submit
    form.addEventListener('submit', function(e) {
      // Opcional: prevenir envío si hay errores (pero FormSubmit ya valida)
      // e.preventDefault(); // No lo usamos porque queremos que se envíe

      // Mostrar mensaje de éxito inmediatamente (antes de redirección)
      successMessage.style.display = 'block';

      // Opcional: ocultar el formulario después del envío
      form.style.display = 'none';

      // Si usas _next en FormSubmit, el usuario será redirigido después
      // Pero si NO usas _next, el mensaje se verá brevemente antes de recargar
    });

    // === OPCIÓN AVANZADA: Detectar respuesta exitosa de FormSubmit ===
    // Si NO usas _next, FormSubmit recarga la página con ?success=1
    // Este código detecta eso y muestra el mensaje al cargar la página
    window.addEventListener('load', function() {
      if (window.location.search.includes('success')) {
        successMessage.style.display = 'block';
        form.style.display = 'none'; // Oculta el formulario
      }
    });
