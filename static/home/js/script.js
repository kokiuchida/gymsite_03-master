window.addEventListener("load" , function (){

    //ここでスライドショーを表示する
    //スライドのスピードが遅い場合はautoplaySpeedの値を調整する
    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:6000,
        arrows:false,
    }); 


});
$(function (){
    $("#menu_closer").on("click",function() {
        $("#menu_button").prop("checked",false);
    });
});

