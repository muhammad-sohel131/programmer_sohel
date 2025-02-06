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

// changing greating
const greetingText = document.querySelector('.hero_title');

if (greetingText) {
    const time = new Date().getHours();
    const greetings = {
        night: ["Good Night", "Sleep Tight", "Sweet Dreams"],
        morning: ["Good Morning", "Rise and Shine", "Have a Great Day"],
        afternoon: ["Good Afternoon", "Hope You're Having a Great Day", "Stay Productive"],
        evening: ["Good Evening", "Wind Down Nicely", "Relax and Unwind"]
    };

    let greeting;
    if (time < 5) {
        greeting = greetings.night[Math.floor(Math.random() * greetings.night.length)];
    } else if (time < 12) {
        greeting = greetings.morning[Math.floor(Math.random() * greetings.morning.length)];
    } else if (time < 18) {
        greeting = greetings.afternoon[Math.floor(Math.random() * greetings.afternoon.length)];
    } else {
        greeting = greetings.evening[Math.floor(Math.random() * greetings.evening.length)];
    }

    const emoji = time < 5 ? "🌙" : time < 12 ? "☀️" : time < 18 ? "🌤️" : "🌙";
    const personalizedGreeting = `${greeting} ${emoji}`;
    greetingText.textContent = personalizedGreeting;
}

// for auto type animation
let typed = new Typed(".auto_type", {
    strings : [
        "Md Sohel",
        "A Web Developer",
    ],
    typeSpeed: 100,
    backSpeed: 90,
    loop: true
});

