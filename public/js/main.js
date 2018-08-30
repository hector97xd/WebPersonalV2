var elem = document.querySelector('.sidenav');
var edge = 'left';
var instance = M.Sidenav.init(elem, edge);

var elemCarousel = document.querySelector('.carousel');
var carousel = M.Carousel.init(elemCarousel, {
    fullWidth: true
});


$(document).ready(function () {
    animarHome();
    $('#acad').animatedModal();
    $('#acadP').animatedModal();
});
$('#bar').click(() => {
    animarMenu();
})
$('#aInicio').click(() => {
    animarHome();
})
$('#aQuien').click(() => {
    $('.textHeader').animateCss("bounceInDown");
    $('.textHeaderPhone').animateCss("bounceInDown");

})
$('#aExp').click(() => {
    $('.textHeaderE').animateCss("bounceInDown");
    $('.textHeaderPhoneE').animateCss("bounceInDown");
    $('.eyesAnimated').animateCss("shake");

})

function animarHome() {
    $('.perfil').animateCss("bounceInDown");
    $('.pname').animateCss("bounce");
    var textoD = $('.shuffleD');
    setTimeout(() => {
        textoD.shuffleLetters({
            "text": "Desarrollador Web"
        });
    }, 2000);

}

function animarMenu() {
    $('#sideFotoText').animateCss("bounceInDown");
    $('#home').animateCss("bounceInDown");
    $('#about').animateCss("bounceInDown");
    $('#exp').animateCss("animated bounceInDown");
    $('#contact').animateCss("animated bounceInDown");
    $('#Sname').animateCss("animated zoomIn");
    $('.logos').animateCss("animated zoomIn");

}

$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = (function (el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);

            if (typeof callback === 'function') callback();
        });

        return this;
    },
});

$('#linkedin').mouseover(()=>{
    $('.linkeinA').animateCss("bounce");
})
$('#github').mouseover(()=>{
    $('.githubA').animateCss("bounce");
})
$('.eyesAnimated').mouseover(()=>{
    $('.eyesAnimated').animateCss("shake");
})
$('.closeAnimated').mouseover(()=>{
    $('.closeAnimated').animateCss("jello");
})