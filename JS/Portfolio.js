let height = $('.navbar').height();

$(".nav-item").mouseover(function(){
    $(this).addClass('navItemActive');
});
$(".nav-item").mouseout(function(){
    $(this).removeClass('navItemActive');
});

$('#ske').click(function(){
    $('html, body').animate({
        scrollTop: $('#div2').offset().top - height
    }, 500);
});

$('#crt').click(function(){
    $('html, body').animate({
        scrollTop: $('#div3').offset().top -height
    }, 500);
});

$('#prj').click(function(){
    $('html, body').animate({
        scrollTop: $('#div4').offset().top - height
    }, 500);
});

