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
    const yOffset = -130; 
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({top: y, behavior: 'smooth'});
}


$(window).scroll(function() {
    var height = $(window).scrollTop();
    var vp = $(window).height();

    if(height > 0 & height < vp/1.3){
        $('#headerTag').html("");
    }

    if(height > vp/1.3 & height < vp*2) {
        $('#ske').addClass("navItemActive"); 
        $('#headerTag').html("Skills & education")
        $('#headerTag').css({"margin-left":-45})
    }
    else{
        $('#ske').removeClass("navItemActive");
    }

    if(height  > vp*2 & height < vp*3+290) {
        $('#crt').addClass("navItemActive"); 
        $('#headerTag').html("Certifications")
        $('#headerTag').css({"margin-left":-90})
    }
    else{
        $('#crt').removeClass("navItemActive");
    }

    if(height  > vp*3+290 & height < vp*4) {
        $('#prj').addClass("navItemActive"); 
        $('#headerTag').html("Projects")
        $('#headerTag').css({"margin-left":-145})
    }
    else{
        $('#prj').removeClass("navItemActive");
    }
});