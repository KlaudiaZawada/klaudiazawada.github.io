$( ".inner-switch" ).on("click", function() {
  if( $( "body" ).hasClass( "dark" )) {
    $( "body" ).removeClass( "dark" );
    $( ".inner-switch" ).text( "OFF" );
  } else {
    $( "body" ).addClass( "dark" );
    $( ".inner-switch" ).text( "ON" );
  }
});

$(document).ready(function (){
    $("button").click(function(){
      window.print();
    });
    $(".subjectFill").click(function(){
      var fill=prompt("Wprowadz nazwę przedmiotu ","---");
      $(this).text(fill);
    });
  });
