

$(document).ready(function(){

    var pictures = $("#slides").children("li");
    var navItems = $("#bits").children("li");
    var arrayimages = ["img/girlbackground.jpg","img/trees.jpg","img/albert.jpg","img/flowers.jpg"];
    var currentNav, currentPic;
    var i = 0;

 
    $("#bits").find('li').first().addClass('active');
    $("#slides").find('li').first().addClass('active');



    function goTo(i){
        $(navItems).removeClass('active');
        $("#bits li").eq(i).addClass('active');
        $('.title').css('background-image','url(' + arrayimages[i] +')');

        pictures.fadeOut(100)
                .eq(i).fadeIn(100);
    
    }


    $("#bits li").on('click',function(){
        var index = $(this).index();
        goTo(index);
    });

    $(".next").on('click',function(){
    if(i === 3 ) {
        i=0;
    }
    else {
        i++;
    } goTo(i);
});

    $('.previous').click(function() {
    if(i === 0 ) {
        i=3;
    }
    else {
        i--;
    } goTo(i);
    });


      });