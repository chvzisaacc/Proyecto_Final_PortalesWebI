document.addEventListener("DOMContentLoaded", () => {
  const botonesFiltro = document.querySelectorAll(".filtro-btn");
  const fotos = document.querySelectorAll(".foto-item");
  const mensajeVacio = document.getElementById("galeriaVacio");

  botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
      const categoriaSeleccionada = boton.dataset.categoria;
      let cantidadVisible = 0;

      botonesFiltro.forEach((btn) => {
        btn.classList.remove("activo");
        btn.setAttribute("aria-pressed", "false");
      });

      boton.classList.add("activo");
      boton.setAttribute("aria-pressed", "true");

      fotos.forEach((foto) => {
        const categoriaFoto = foto.dataset.categoria;

        const debeMostrarse =
          categoriaSeleccionada === "todos" ||
          categoriaFoto === categoriaSeleccionada;

        if (debeMostrarse) {
          foto.classList.remove("oculto");
          foto.removeAttribute("aria-hidden");
          foto.setAttribute("tabindex", "0");
          cantidadVisible++;
        } else {
          foto.classList.add("oculto");
          foto.setAttribute("aria-hidden", "true");
          foto.setAttribute("tabindex", "-1");
        }
      });

      mensajeVacio.hidden = cantidadVisible > 0;
    });
  });
});