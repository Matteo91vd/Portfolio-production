

const rightButton = document.getElementById("right-button");
const leftButton = document.getElementById("left-button");
const slide = document.querySelectorAll("div.site-slide");
let currentIndex = 0;
let slidesToShow = 3;

// calcolo slide visibili
function updateSlidesToShow() {
    slidesToShow = window.innerWidth <= 992 ? (window.innerWidth <= 576 ? 1 : 2) : 3};

// calcolo indice
function calculateMaxIndex() {
    return Math.max(0, slide.length - slidesToShow);
}

// aggiornamento posizione slide 
function updateSliderPosition() {
    const slideWidth = slide[0].offsetWidth + 20; 
    
    slide.forEach((el, i) => {el.style.transform = `translateX(-${currentIndex * slideWidth}px)`})};
    
// spostamento slide button dx
function slideShowRight() {
    const maxIndex = calculateMaxIndex();
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition()};
        
// spostamento slide button sx
function slideShowLeft() {
    const maxIndex = calculateMaxIndex();
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = maxIndex;
    }
    updateSliderPosition()};
                  
rightButton.addEventListener("click", slideShowRight);
leftButton.addEventListener("click", slideShowLeft);

// aggiustamento responsive
  // Responsive adjustment
  window.addEventListener('resize', () => {
    const oldSlidesToShow = slidesToShow;
    updateSlidesToShow();
    
    if (oldSlidesToShow !== slidesToShow) {
        currentIndex = 0;
        updateSliderPosition();
    }
});

 // Inizializzazione slide
 updateSlidesToShow();
 updateSliderPosition();