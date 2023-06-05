document.addEventListener('DOMContentLoaded', function () {

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



  const buttonNew = document.querySelector(".button-adicionar")
  const modal = document.querySelector("dialog")
  const buttonClose = document.querySelector("dialog .dialog-container .div-button-exit i")

  buttonNew.onclick = function () {
    modal.showModal()
  }
  buttonClose.onclick = function(){
    modal.close()
  }

});

