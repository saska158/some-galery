const closeContainer = document.querySelector('.close-container');
const openContainer = document.querySelector('.open-container');
const container = document.querySelector('.container');

openContainer.addEventListener('click', () => {
    container.classList.add('show-container');   
})

closeContainer.addEventListener('click', () => {
    container.classList.remove('show-container');   
})