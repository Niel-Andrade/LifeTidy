document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'pt-br',
      timeZone: 'UTC',
      initialView: 'dayGridMonth',
      events: 'https://fullcalendar.io/api/demo-feeds/events.json',
      editable: true,
      selectable: true
    });
  
    calendar.render();
  });