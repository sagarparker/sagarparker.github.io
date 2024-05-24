let height = $('.navbar').height() + 20;


$('.navbar-toggler').on("click",function() {
    let navbar_height =  $('.navbar-toggler').attr('aria-expanded');
    if (navbar_height === "false") {
        $('.navbar').addClass("navbar-expanded");
    }
    else{
        $('.navbar').removeClass("navbar-expanded");
    }
});

$(".nav-item").mouseover(function(){
    $(this).addClass('navItemActive');
});
$(".nav-item").mouseout(function(){
    $(this).removeClass('navItemActive');
});

$('#crt').click(function(){
    $('html, body').animate({
        scrollTop: $('#div3').offset().top - height
    }, 500);
});

$('#prj').click(function(){
    $('html, body').animate({
        scrollTop: $('#div4').offset().top - height
    }, 500);
});

