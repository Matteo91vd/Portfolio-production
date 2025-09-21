
const navBarButton = document.getElementById('button-responsive');
const navUl = document.querySelector('ul');
    
navBarButton.addEventListener ('click', () => {
    navUl.classList.toggle('visible');
});
