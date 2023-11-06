const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

darkModeToggle.addEventListener('change', function () {
    const header = document.getElementById('header');
    if (this.checked) {
        header.classList.add('dark-mode');
    } else {
        header.classList.remove('dark-mode');
    }
});



const menuButton = document.getElementById('menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu-list');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});


const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})
    
