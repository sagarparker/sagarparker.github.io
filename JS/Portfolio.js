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
    var div1_height = $('#div1').height();
    var div2_height = $('#div2').height();
    var div3_height = $('#div3').height();
    var div4_height = $('#div4').height();

    if(height > 0 & height < vp*0.9){
        $('#headerTag').html("");
    }
    if(height > vp*0.9 & height < vp*2.5){
        $('#headerTag').html("Skills & education")
        $('#headerTag').css({"margin-left":-35})
    }
    if(height > vp*2.5 & height < vp*4.2){
        $('#headerTag').html("Certifications")
        $('#headerTag').css({"margin-left":-80})
    }

    if(height > vp*4.2 & height <vp*8){
        $('#headerTag').html("Projects")
        $('#headerTag').css({"margin-left":-135})
    }

    if(height > vp/1.3 & height < vp*2) {
        $('#ske').addClass("navItemActive"); 
    }
    else{
        $('#ske').removeClass("navItemActive");
    }

    if(height  > vp*2 & height < vp*3+290) {
        $('#crt').addClass("navItemActive"); 
    }
    else{
        $('#crt').removeClass("navItemActive");
    }

    if(height  > vp*3+290 & height < vp*4) {
        $('#prj').addClass("navItemActive"); 
    }
    else{
        $('#prj').removeClass("navItemActive");
    }
});