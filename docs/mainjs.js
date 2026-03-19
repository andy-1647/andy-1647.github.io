
    const pista = document.querySelector('.pista');
    const diapositivas = Array.from(pista.children);
    const botonAnterior = document.querySelector('.boton-carrusel.anterior');
    const botonSiguiente = document.querySelector('.boton-carrusel.siguiente');

    let indiceActual = 0;
    const anchoDiapositiva = diapositivas[0].getBoundingClientRect().width;

    function moverADiapositiva(indice) {
      pista.style.transform = `translateX(-${anchoDiapositiva * indice}px)`;
      indiceActual = indice;
    }

    function siguienteDiapositiva() {
      if (indiceActual === diapositivas.length - 1) {
        moverADiapositiva(0);
      } else {
        moverADiapositiva(indiceActual + 1);
      }
    }

    function anteriorDiapositiva() {
      if (indiceActual === 0) {
        moverADiapositiva(diapositivas.length - 1);
      } else {
        moverADiapositiva(indiceActual - 1);
      }
    }

    botonSiguiente.addEventListener('click', siguienteDiapositiva);
    botonAnterior.addEventListener('click', anteriorDiapositiva);

    setInterval(siguienteDiapositiva, 3000);
    
