$(document).ready(function (){
    $("button").click(function(){
      window.print();
    });
    $(".subjectFill").click(function(){
      var fill=prompt("Wprowadz nazwę przedmiotu ","---");
      $(this).text(fill);
    });
  });
