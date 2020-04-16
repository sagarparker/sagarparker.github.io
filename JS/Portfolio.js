$(".nav-item").mouseover(function(){
    $(this).addClass('navItemActive');
});
$(".nav-item").mouseout(function(){
    $(this).removeClass('navItemActive');
});



function skeFunc(){
    const id = 'div2';
    const yOffset = -25; 
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({top: y, behavior: 'smooth'});
}

function crtFunc(){
    const id = 'div3';
    const yOffset = -100; 
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({top: y, behavior: 'smooth'});
}

function prjFunc(){
    const id = 'div4';
    const yOffset = -140; 
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({top: y, behavior: 'smooth'});
}


$(window).scroll(function() {
    var height = $(window).scrollTop();
    var vp = $(window).height();

    if(height  > vp & height < vp*2) {
        $('#ske').addClass("navItemActive"); 
    }
    else{
        $('#ske').removeClass("navItemActive");
    }

    if(height  > vp*2 & height < vp*3+150) {
        $('#crt').addClass("navItemActive"); 
    }
    else{
        $('#crt').removeClass("navItemActive");
    }

    if(height  > vp*3+150 & height < vp*4) {
        $('#prj').addClass("navItemActive"); 
    }
    else{
        $('#prj').removeClass("navItemActive");
    }
});