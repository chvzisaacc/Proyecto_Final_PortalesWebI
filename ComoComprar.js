const botones = document.querySelectorAll(".paso");
const descripcion = document.getElementById("descripcion-paso");

const informacion = {
    pago:
    "Contamos con diferentes opciones de pago para facilitar la compra de nuestros productos y brindar mayor comodidad a nuestros clientes.",
    credito:
    "Ofrecemos opciones de crédito accesibles para que nuestros clientes puedan adquirir artículos para el hogar de una manera más flexible.",
    entrega:
    "Puedes consultar la disponibilidad de entrega según tu ubicación y el producto seleccionado.",
    garantia:
    "Nuestros productos cuentan con respaldo de calidad según las condiciones establecidas por la empresa."
};

botones.forEach(function(boton){
    boton.addEventListener("click", function(){
        const opcion = boton.dataset.info;
        descripcion.textContent = informacion[opcion];
    });
});