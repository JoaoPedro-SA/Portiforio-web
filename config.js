function updateDate() {
  // Seleciona o elemento HTML com a classe 'data'
  const result = document.querySelector('.data');

  // Obtém a data atual
  const dataAtual = new Date();

  // Converte a data em uma string formatada sem o fuso horário
  const dataFormatada = dataAtual.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", hour12: "dataAtual", });


  const data2 = dataFormatada.toString();
  /* essa opção 👇⌚ para formata o data
   dataAtual.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
   */
  // Define o conteúdo do elemento HTML 'result' como a data formatada
  result.textContent = data2;

  // Agende a próxima atualização eficientemente usando 'requestAnimationFrame'
  requestAnimationFrame(updateDate);
}

// Chamada inicial da função 'updateDate'
requestAnimationFrame(updateDate);


function updateDate1() {
  // Seleciona o elemento HTML com a classe 'data'
  const result = document.querySelector('.data2');

  // Obtém a data atual
  const dataAtual1 = new Date();

  // Converte a data em uma string formatada sem o fuso horário
  const dataFormatada2 = dataAtual1.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", hour12: "dataAtual", });


  const data22 = dataFormatada2.toString();
  /* essa opção 👇⌚ para formata o data
   dataAtual.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
   */
  // Define o conteúdo do elemento HTML 'result' como a data formatada
  result.textContent = data22;

  // Agende a próxima atualização eficientemente usando 'requestAnimationFrame'
  requestAnimationFrame(updateDate1);
}

// Chamada inicial da função 'updateDate'
requestAnimationFrame(updateDate1);



// Motor
document.addEventListener("DOMContentLoaded", () => {
  const controleEsquerdo = document.getElementById("controleEsquerdo");
  const controleDireito = document.getElementById("controleDireito");
  const elementoAudio = document.querySelector(".cards");
  let tempo;
  let localizacao = 0; // posição inicial
  const passo = 25; // pixels por intervalo
  const limiteExtra = 1500; // espaço extra para deslocamento

  function atualizarPosicao(novaPosicao) {
    localizacao = novaPosicao;
    elementoAudio.style.left = `${localizacao}px`;
  }

  function deslocar(direcao) {
    clearInterval(tempo);
    tempo = setInterval(() => {
      localizacao += direcao * passo;
      if (localizacao < -elementoAudio.offsetWidth - limiteExtra) {
        localizacao = window.innerWidth + limiteExtra;
      } else if (localizacao > window.innerWidth + limiteExtra) {
        localizacao = -elementoAudio.offsetWidth - limiteExtra;
      }
      atualizarPosicao(localizacao);
    }, 20);
  }

  function pararDeslocamento() {
    clearInterval(tempo);
  }

  function iniciarArrasto(event) {
    const touch = event.touches ? event.touches[0] : event;
    elementoAudio.dataset.inicialX = touch.clientX;
    elementoAudio.dataset.localizacaoInicial = localizacao;
    document.addEventListener("mousemove", arrastar);
    document.addEventListener("touchmove", arrastar);
    document.addEventListener("mouseup", pararArrasto);
    document.addEventListener("touchend", pararArrasto);
  }

  function arrastar(event) {
    const touch = event.touches ? event.touches[0] : event;
    const movimento = touch.clientX - elementoAudio.dataset.inicialX;
    atualizarPosicao(parseFloat(elementoAudio.dataset.localizacaoInicial) + movimento);
  }

  function pararArrasto() {
    document.removeEventListener("mousemove", arrastar);
    document.removeEventListener("touchmove", arrastar);
    document.removeEventListener("mouseup", pararArrasto);
    document.removeEventListener("touchend", pararArrasto);
  }

  controleEsquerdo.addEventListener("mousedown", () => deslocar(-1));
  controleEsquerdo.addEventListener("mouseup", pararDeslocamento);
  controleDireito.addEventListener("mousedown", () => deslocar(1));
  controleDireito.addEventListener("mouseup", pararDeslocamento);

  // Adicionando eventos de toque para controles
  controleEsquerdo.addEventListener("touchstart", () => deslocar(-1));
  controleEsquerdo.addEventListener("touchend", pararDeslocamento);
  controleDireito.addEventListener("touchstart", () => deslocar(1));
  controleDireito.addEventListener("touchend", pararDeslocamento);

  // Adicionando eventos de arrasto para dispositivos móveis
  elementoAudio.addEventListener("mousedown", iniciarArrasto);
  elementoAudio.addEventListener("touchstart", iniciarArrasto);
});



let nav = document.getElementById('nav');
let volta_nav = document.querySelector('.volta_nav');
let tradutor = document.getElementById('google_translate_element');

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'pt', // Idioma original da página
    includedLanguages: 'pt,en,es,fr,de,it', // Idiomas para os quais a página pode ser traduzida
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false,
    autoDetect: true,
    onlanguagechange: function (event) {
      tradutor.setAttribute('data-lang-pair', event.languageCode + '|pt'); // Configura a tradução para o novo idioma
    }
  }, 'google_translate_element');

}

googleTranslateElementInit();









// let botaopreto = document.querySelector('.mudar_cor_css');
// let linkEstilo = document.querySelector('.stylesheet '); // Seleciona o link do CSS atual

// botaopreto.addEventListener('click', function () {
//   linkEstilo.href = (linkEstilo.href.includes('style.css')) ? 'blank.css' : 'style.css';
// });

