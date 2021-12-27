const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children)
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
const numbersNav = document.querySelector('.carousel-nav');
const numbers = Array.from(numbersNav.children)
const slideWidth = slides[0].getBoundingClientRect().width;


const setSlidePosition = slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
})

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const upadateNumbers = (currentNumber, targetNumber) => {
    currentNumber.classList.remove('current-slide');
    targetNumber.classList.add('current-slide');
}

const hideShowArrows = (targetIndex, prevButton, nextButton, slides) => {
    if(targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden')
    } else if(targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}




prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)
    const currentNumber = numbersNav.querySelector('.current-slide');
    const prevNumber = currentNumber.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide)
    upadateNumbers(currentNumber, prevNumber)
    hideShowArrows(prevIndex, prevButton, nextButton, slides)
 
})


nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
    const currentNumber = numbersNav.querySelector('.current-slide');
    const nextNumber = currentNumber.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide)
    upadateNumbers(currentNumber, nextNumber)
    hideShowArrows(nextIndex, prevButton, nextButton, slides)
})


numbersNav.addEventListener('click', e => {
    const targetNumber = e.target.closest('button');
  
    if(!targetNumber) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentNumber = numbersNav.querySelector('.current-slide');
    const targetIndex = numbers.findIndex(number => number === targetNumber);
    const targetSlide = slides[targetIndex];

    
    moveToSlide(track, currentSlide, targetSlide);
    upadateNumbers(currentNumber, targetNumber)
    hideShowArrows(targetIndex, prevButton, nextButton, slides)  
   
})






