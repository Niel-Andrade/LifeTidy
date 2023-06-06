document.addEventListener('DOMContentLoaded', function () {
  //Calendario
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
 

  // Navegação Lateral
  $(document).ready(function () {

    $('.sub-btn').click(function () {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    $('.menu-btn').click(function () {
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
        $('.main-tela-principal').removeClass('ativa')
    });

    $('.close-btn').click(function () {
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
        $('.main-tela-principal').addClass('ativa')
    });

});


  //Modal-Tarefa e Rendimento
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

   //Botão no informativo de rendimento
   const tabs = document.querySelectorAll(".nav-button");

   tabs.forEach((clickedTab) => {
       //evento click
       clickedTab.addEventListener("click", ()=>{
           //remove aba ativa atual
           tabs.forEach((nav)=>{
               nav.classList.remove("active");
           });
           //muda para a próxima aba ativa
           clickedTab.classList.add("active");
       });
   });


});

