document.addEventListener("DOMContentLoaded", () => {
    let hmbButton = document.querySelector("header .hmb-button");
    let nav = document.querySelector("header nav");
    
    if (hmbButton && nav) {
        hmbButton.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            nav.classList.toggle("hidden");
        });
    }

    // Instanciando el carusel
    try {
        let carusel = new Carusel(".carusel");
    } catch (error) {
        console.error("Error al iniciar el carrusel:", error);
    }
});
