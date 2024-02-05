$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Frontend Developer", "Software Developer", "Fresher", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Frontend Developer", "Software Developer", "Fresher", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

let btn1 = document.querySelector("#butn1");
let btn2 = document.querySelector("#butn2");
let btn3 = document.querySelector("#butn3");
let btn4 = document.querySelector("#butn4");



document.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonId = event.target.id;
        let confirmationMessage, redirectUrl;

        if (buttonId === 'butn1') {
            confirmationMessage = "Are you sure want to visit E-Learning website?";
            redirectUrl = "https://e-learning system/";
        } else if (buttonId === 'butn2') {
            confirmationMessage = "Are you sure want to visit e-health card system?";
            redirectUrl = "https://e-health card system";
        } else if (buttonId === 'butn3') {
            confirmationMessage = "Are you sure want to visit codesandbots?";
            redirectUrl = "https://www.codesandbots.com/";
        } else if (buttonId === 'butn4') {
            confirmationMessage = "Are you sure want to visit this game?";
            redirectUrl = "https://sanjana-deshmukh06.github.io/Tic-Tac-Toe/";
        }
        if (confirm(confirmationMessage)) {
            window.location.href = redirectUrl;
        }
    }
});
