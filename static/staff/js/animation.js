window.addEventListener("load" , function (){

    //TIPS:CSSと違い、JSは0から始まるため、最初の要素は偶数である点に注意!!
    $(".about_staff_row:even").css({"right":"-2rem","opacity":"0"});
    $(".about_staff_row:odd").css({"left":"-2rem","opacity":"0"});

});

$(function() {

    $(".about_staff_row:even").on("inview",function(event,visible){
        if (visible){
            $(this).animate({   "right":"0",
                                "opacity":"1",
                                } ,1200);
        }
        else{
            $(this).css({"right":"-2rem","opacity":"0"});
        }
    });
    $(".about_staff_row:odd").on("inview",function(event,visible){
        if (visible){
            $(this).animate({   "left":"0",
                                "opacity":"1",
                                } ,1200);
        }
        else{
            $(this).css({"left":"-2rem","opacity":"0"});
        }
    });
});

