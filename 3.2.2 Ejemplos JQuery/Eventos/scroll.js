$(document).ready(function () {
	// body...
	var x=0;
	$("#click").scroll(function(){
        $("span").text( x+= 1);
    });

	});
