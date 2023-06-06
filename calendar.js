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
  const modalTarefa = document.querySelector(".dialog-tarefa")
  const closeTarefa = document.querySelector(".div-button-exit i")
  

  buttonNew.onclick = function () {
    modalTarefa.showModal()
  }
  closeTarefa.onclick = function(){
    modalTarefa.close() 
  }

  const buttonInformativo = document.querySelector(".button-desempenho")
  const modalInformativo = document.querySelector(".dialog-desempenho")
  const closeDesempenho = modalInformativo.querySelector(".div-button-exit i")
  buttonInformativo.onclick = function(){
    modalInformativo.showModal()
  }
  closeDesempenho.onclick = function(){
    modalInformativo.close()
  }


   //lets get the nav tabs

   const tabs = document.querySelectorAll(".nav");

   tabs.forEach((clickedTab) => {
       //adding click event
       clickedTab.addEventListener("click", ()=>{
           //remove current active tab
           tabs.forEach((nav)=>{
               nav.classList.remove("active");
           });

           //switch to next active tab
           clickedTab.classList.add("active");
       });
   });

});

