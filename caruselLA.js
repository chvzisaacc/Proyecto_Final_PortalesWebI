class Carusel {
    root = null;
    trail = null;
    slides = null;
    slidesCount = 0;
    intervalTime = 0;
    currentIndex = 0;
    direction = 1;
    
    constructor(rootSelector, ticksecond = 3){
        this.root = document.querySelector(rootSelector);
        if(!this.root){
            throw new Error("No se encontro el elemento root del carusel");
        }
        this.trail = this.root.querySelector(".carusel-trail");
        this.slides = [...this.root.querySelectorAll(".carusel-trail>section")];
        this.slidesCount = this.slides.length;
        if(this.slidesCount < 3){
            throw new Error("Minimo son 3 elementos para el carusel");
        }
        console.log("Debug Data", {"root":this.root, "trail":this.trail, "slides":this.slides, "slidesCount":this.slidesCount});
        this.intervalTime = ticksecond * 1000;
        this.tick();    
    }

    tick(){
        setTimeout(() => {
            this.currentIndex += this.direction;
            this.moveSlide();
        }, this.intervalTime);
    }
    
    moveSlide(){
        if(this.currentIndex > this.slidesCount - 2 || this.currentIndex < 0){
            this.direction *= -1;
            this.currentIndex = this.currentIndex + (this.direction * 2);
        }
       
        this.trail.style.transform = `translateX(${(50 * this.currentIndex * -1)}vw)`;
        this.tick();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    try {
        new Carusel('.carusel', 3);
    } catch(e) {
        console.error("Error al iniciar el carrusel:", e);
    }

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgModalEnlarged");
    const closeBtn = document.querySelector(".close-modal");

    const productImages = document.querySelectorAll('.card img');

    if(modal && modalImg && closeBtn) {
        
        productImages.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "flex";
                modalImg.src = this.src;
                modalImg.alt = this.alt;
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});