document.addEventListener('DOMContentLoaded', function () {
  //Calendario
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'pt-br',
    timeZone: 'UTC',
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'APRESENTAÇÃO DE PROGRAMAÇÃO WEB',
        start: '2023-06-01',
        end: '2023-06-02',
        color: '#13F300',
      },
      {
        title: 'VISTORIA VEÍCULAR',
        start: '2023-06-20',
        end: '2023-06-20',
        color: '#EA4335',
      },
      {
        title: 'TRABALHO DE P.I.',
        start: '2023-06-10',
        end: '2023-06-10',
        color: '#1B0BD7',
      },
      
    ],
    editable: true,
    selectable: true,
    buttonText: {
      today: 'Hoje'
    }
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


  //Modal de Tarefa
  const buttonNew = document.querySelector(".button-adicionar")
  const modalTarefa = document.querySelector(".dialog-tarefa")
  const closeTarefa = document.querySelector(".div-button-exit i")

  buttonNew.onclick = function () {
    modalTarefa.showModal()
  }
  closeTarefa.onclick = function () {
    modalTarefa.close()
  }

  /* MODAL DE EXCLUSÃO */
  /*const buttonExlusao = document.querySelector(".button-apagar")
  const modalExclusao = document.querySelector(".dialog-exclusao")
  const closeExclusao = modalExclusao.querySelector(".div-button-exit i")

  buttonExlusao.onclick = function () {
    modalExclusao.showModal()
  }
  closeExclusao.onclick = function () {
    modalExclusao.close()
  }*/

  /* MODAL DE NOTIFICAÇÕES */
  const buttonNotificacoes = document.querySelector(".button-aviso")
  const modalNotificacoes = document.querySelector(".dialog-notificacoes")
  const closeNotificacoes = modalNotificacoes.querySelector(".div-button-exit i")

  buttonNotificacoes.onclick = function () {
    modalNotificacoes.showModal()
  }
  closeNotificacoes.onclick = function () {
    modalNotificacoes.close()
  }

  /* Modal de REDIMENTO-DESEMPENHO */
  const buttonInformativo = document.querySelector(".button-desempenho")
  const modalInformativo = document.querySelector(".dialog-desempenho")
  const closeDesempenho = modalInformativo.querySelector(".div-button-exit i")

  buttonInformativo.onclick = function () {
    modalInformativo.showModal()
  }
  closeDesempenho.onclick = function () {
    modalInformativo.close()
  }



  //Botão no informativo de rendimento
  const tabs = document.querySelectorAll(".nav-button");

  tabs.forEach((clickedTab) => {
    //evento click
    clickedTab.addEventListener("click", () => {
      //remove aba ativa atual
      tabs.forEach((nav) => {
        nav.classList.remove("active");
      });
      //muda para a próxima aba ativa
      clickedTab.classList.add("active");
    });
  });


});

