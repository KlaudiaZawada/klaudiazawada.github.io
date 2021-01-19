

calendarMain();
calendarEvent();


function calendarMain() {

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'pl'
    });
    calendar.render();
  });

}