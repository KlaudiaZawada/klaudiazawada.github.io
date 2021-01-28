$( ".inner-switch" ).on("click", function() {
  if( $( "body" ).hasClass( "dark" )) {
    $( "body" ).removeClass( "dark" );
    $( ".inner-switch" ).text( "OFF" );
  } else {
    $( "body" ).addClass( "dark" );
    $( ".inner-switch" ).text( "ON" );
  }
});

calendarMain();
calendarEvent();

function calendarMain() {
  var calendarEl = document.getElementById('calendar');

  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2021-01-19',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
  locale:'pl',
    events: [],


  });

  calendar.render();
}