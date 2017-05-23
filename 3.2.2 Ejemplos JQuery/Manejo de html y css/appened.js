$(document).ready(function(){
$("#texto").click(function(){
$("p").append(" <b>Los insertos método append () especifican contenido en el extremo de los elementos seleccionados.</b>.");
  });  
 $("#Lista").click(function(){
        $("ol").append("<li>???</li>");
    });
});