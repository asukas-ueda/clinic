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

function hamburger() {
    　　document.getElementById('line1').classList.toggle('linea');
    　　document.getElementById('line2').classList.toggle('lineb');
    　　document.getElementById('line3').classList.toggle('linec');
    　　document.getElementById('target').classList.toggle('slidex');
    　　document.getElementById('nav_f').classList.toggle('fadein');
    }

    document.getElementById('target').addEventListener('click', function () {
    　　hamburger();
    });