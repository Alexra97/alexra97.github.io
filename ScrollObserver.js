$(document).ready(function () {
  const contenedor_titulo = document.querySelector('.contenedor-titulo');
  contenedor_titulo.classList.remove('contenedor-titulo-transition');

  const observer_title = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contenedor_titulo.classList.add('contenedor-titulo-transition');
        return;
      }

      contenedor_titulo.classList.remove('contenedor-titulo-transition');
    });
  });

  observer_title.observe(document.querySelector('.contenedor-titulo-wrapper'));
})
