class Carusel {
    root = null;
    trail = null;
    slides = null;
    slidesCount = 0;
    currentIndex = 0;
    direction = 1;
    btnLeft = null;
    btnRight = null;
    onProcess = false;
    indexedButtons = null;
    indexedButtonsItems = [];


    constructor( rootSelector ) {
        this.root = document.querySelector(rootSelector);
        if(!this.root) {
            throw new Error("No se encuentra el elemento root del carusel");
        }
        this.trail = this.root.querySelector(".carusel-trail");
        this.slides = this.root.querySelectorAll(".carusel-trail>section");
        this.slidesCount = this.slides.length;
        if (this.slidesCount < 3) {
            throw new Error("Mínimo son 3 elementos en carusel");
        }
        this.generateLateralsUX();
        this.generateIndexedUX();
    }

    generateIndexedUX(){
        this.indexedButtons = document.createElement("DIV");
        this.indexedButtons.classList.add("carusel-indexed-btns");

        for ( let i = 0; i < this.slidesCount; i++) {
            let btnIdx = document.createElement("DIV");
            if ( i === 0) {
                // 1 == "1"
                // 1 === "1"
                // 1 === 1
                btnIdx.classList.add("current");
            }
            btnIdx.addEventListener("click", (e)=>{
                e.preventDefault();
                e.stopPropagation();
                if (this.onProcess) {
                    return;
                }
                this.onProcess = true;
                this.currentIndex = i;
                this.moveSlide();
            });
            this.indexedButtons.appendChild(btnIdx);
            this.indexedButtonsItems.push(btnIdx);
        }
        this.root.appendChild(this.indexedButtons);
    }

    updateCurrentIndexedBtn(){
        this.indexedButtonsItems.forEach(
            (o)=>{
                o.classList.remove("current");
            }
        );
        this.indexedButtonsItems[this.currentIndex].classList.add("current");
    }

    generateLateralsUX() {
        this.btnLeft = document.createElement("DIV");
        this.btnRight = document.createElement("DIV");

        this.btnLeft.innerHTML = "&lt;";
        this.btnRight.innerHTML = "&gt";

        this.btnLeft.classList.add(
            "carusel-btn",
            "carusel-btn-left"
        );
        this.btnRight.classList.add(
            "carusel-btn",
            "carusel-btn-right"
        );
        this.btnLeft.addEventListener("click", (e)=>{
            e.preventDefault();
            e.stopPropagation();
            if(this.onProcess || this.currentIndex <= 0 ) {
                return;
            }
            this.onProcess = true;
            this.currentIndex--;
            this.moveSlide();
        });
        this.btnRight.addEventListener("click", (e)=>{
            e.preventDefault();
            e.stopPropagation();
            if(this.onProcess || this.currentIndex >= this.slidesCount - 1 ) {
                return;
            }
            this.onProcess = true;
            this.currentIndex++;
            this.moveSlide();
        });
        this.root.appendChild(this.btnLeft);
        this.root.appendChild(this.btnRight);
    }

    moveSlide(){
        if(this.currentIndex >= this.slidesCount) {
            this.currentIndex = this.slidesCount - 1;
        }
        if(this.currentIndex < 0) {
            this.currentIndex = 0;
        }
        this.trail.style.transform = `translateX(${(100 * this.currentIndex * -1)}%)`;
        this.updateCurrentIndexedBtn();
        this.onProcess = false;
    }
}
