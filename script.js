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


  // Sub menu no Header

  const divImgPerfil = document.querySelector('.div-img-perfil');

  divImgPerfil.addEventListener('click', function () {
    divImgPerfil.classList.toggle('active');
  });


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
  const buttonNewTarefa = document.querySelectorAll(".button-new")
  const buttonEdit = document.querySelectorAll(".fa-pencil-alt")
  const modalTarefa = document.querySelector(".dialog-tarefa")
  const closeTarefa = document.querySelector(".div-button-exit i")

  function openModal() {
    modalTarefa.showModal()
  }

  buttonNew.onclick = openModal;
  buttonNewTarefa.forEach(function (button) { //Qualquer button.new clicado, abrirá o Modal Tarefa
    button.onclick = openModal;
  });
  buttonEdit.forEach(function (button) { //Qualquer fa-pencil-alt clicado, abrirá o Modal Tarefa
    button.onclick = openModal;
  });



  closeTarefa.onclick = function () {
    modalTarefa.close()
  }

  /* MODAL DE EXCLUSÃO */
  const buttonExlusao = document.querySelectorAll(".fa-trash")
  const modalExclusao = document.querySelector(".dialog-exclusao")
  const closeExclusao = modalExclusao.querySelector(".buttons-exclusao-nao")


  function openModalExclusao() {
    modalExclusao.showModal()
  }

  buttonExlusao.forEach(function (button) { //Qualquer fa-trash clicado, abrirá o Modal Exclusão
    button.onclick = openModalExclusao;
  });

  closeExclusao.onclick = function () {
    modalExclusao.close()
  }

  const buttonConfirmacaoExclusao = document.querySelector(".buttons-exclusao-sim");

  buttonConfirmacaoExclusao.addEventListener("click", function () {
    alert("Função em Desenvolvimento");
  });

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

