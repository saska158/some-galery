let slideIndex = 0;
const openButton = document.querySelector('.main-nav-open-button');
const closeButton = document.querySelector('.main-nav-close-button')
const navigation = document.querySelector('.main-nav')

openButton.addEventListener('click', e => {
    navigation.classList.add('main-nav-open')
})
closeButton.addEventListener('click', e => {
    navigation.classList.remove('main-nav-open') 
})


function showSlides() {
    const track = document.querySelector('.homepage-slideshow');
    const slides = Array.from(track.children);

    const hideSlides = slides.map(slide => slide.style.display = 'none')
    
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = 'block';
    
    setTimeout(showSlides, 3000)
  
}

showSlides()



