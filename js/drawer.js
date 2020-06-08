$(function(){
    var setImg = '#viewer';
    var fadeSpeed = 1000;
    var switchDelay =5000;

    $(setImg).children('img').css({opacity:'0'});
    $(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);

    setInterval(function(){
        $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
    },switchDelay);
});

function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('target_inner');
    var blackBg = document.getElementById('target_open');

    hamburger.addEventListener('click', function () {
        body.classList.toggle('menu_open');
    });
    blackBg.addEventListener('click', function () {
        body.classList.remove('menu_open');
    });
}
toggleNav();