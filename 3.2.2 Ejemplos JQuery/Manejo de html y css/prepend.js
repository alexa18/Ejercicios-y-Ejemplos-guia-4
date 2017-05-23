$(document).ready(function(){
$("#texto").click(function(){
$("p").prepend(" <b>Los insertos método prepend () especifican contenido al principio de los elementos seleccionados.</b>.");
 });  
 $("#Lista").click(function(){
        $("ol").prepend("<li>!!!</li>");
    });
});