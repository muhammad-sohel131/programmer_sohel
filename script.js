import data from './firbaseInfo.js';
console.log(data);

const menuBar = document.querySelector('.menu_bar');
menuBar.addEventListener('click', () => {
    document.querySelector('.horizontal_menu').classList.add('show_menu');
})

const closeMenu = document.querySelector('.close_menu');
closeMenu.addEventListener('click', () => {
    document.querySelector('.horizontal_menu').classList.remove('show_menu');
})

const menuLinks = document.querySelectorAll('.horizontal_menu .menu_link');
[...menuLinks].forEach((link) => {
    link.addEventListener('click', function() {
        [...menuLinks].forEach(link => {
            link.classList.remove('active_link')
        });
        this.classList.add('active_link')
    })
})

window.onscroll = () => {
    let scrollHeight = window.scrollY;
    if(scrollHeight > 200){
        document.querySelector('header').classList.add('sticky_header');
    }else {
        document.querySelector('header').classList.remove('sticky_header');
    }
}

// for auto type animation
let typed = new Typed(".auto_type", {
    strings : [
        "A Web Developer",
        "A Web Freelancer"
    ],
    typeSpeed: 100,
    backSpeed: 90,
    loop: true
});

