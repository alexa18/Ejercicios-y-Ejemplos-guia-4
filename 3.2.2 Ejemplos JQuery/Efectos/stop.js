$(document).ready(function(){
     $("button").click(function(){
        $("div").animate({height: 300}, 3000);
        $("div").animate({width: 300}, 3000);
    });
    $("#stop").click(function(){
        $("div").stop();
    });
    });
 