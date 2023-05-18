
  // Desabilita a exibição do menu de contexto do botão direito do mouse
  document.addEventListener('contextmenu', event => event.preventDefault());

  // Desabilita o uso da tecla F12 para abrir o console do navegador e redireciona para outra página
  document.addEventListener('keydown', event => {
    if (event.key === 'F12') {
      event.preventDefault();
      window.location.href = "https://www.example.com"; // Substitua "https://www.example.com" pela URL da página que deseja redirecionar
    }
  });

  // Desabilita o uso do atalho Ctrl+Shift+I para abrir o console do navegador
  document.addEventListener('keydown', event => {
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
      event.preventDefault();
    }
  });

  // Desabilita o uso do atalho Ctrl+U para abrir o console do navegador
  document.addEventListener('keydown', event => {
    if (event.ctrlKey && event.key === 'u') {
      event.preventDefault();
      window.location.href = "https://www.exemplo.com"; // substitua o link pela URL da página que você deseja redirecionar
    }
  });

   // Inclua a API do YouTube 
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Coloque o ID do vídeo do YouTube que você deseja exibir
  var videoID = "cYL3r4tAYX8";
  // Crie o player de vídeo do YouTube
  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: videoID,
      playerVars: {
        'autoplay': 1, // Autoplay do vídeo
        'mute': 1, // Inicia o vídeo em modo mudo
        'controls': 0, // Esconde os controles do YouTube
        'disablekb': 1, // Desabilita o uso do teclado para controlar o vídeo
        'modestbranding': 1 // Remove o logo do YouTube do player
      },
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  // Função para iniciar o player assim que estiver pronto
  function onPlayerReady(event) {
    // Exibe o overlay de som ao iniciar o vídeo
    var muteOverlay = document.getElementById('mute-overlay');
    muteOverlay.style.display = 'flex';
    // Adiciona um evento de clique no botão de som do overlay
    var muteButton = document.getElementById('mute-button');
    muteButton.addEventListener('click', function() {
      // Remove o overlay de som, ativa o som do vídeo e reinicia o vídeo
      muteOverlay.style.display = 'none';
      player.unMute();
      player.seekTo(0);
    });
  }
// timer.js
function showBuyButtonWithDelay(delayInMinutes, delayInSeconds) {
  var totalTimeInMilliseconds = (delayInMinutes * 60000) + (delayInSeconds * 1000);

  setTimeout(function() {
    document.getElementById('buy-button').style.display = 'block';
    document.getElementById('buy-button2').style.display = 'block';
    document.getElementById('wts').style.display = 'block';
  }, totalTimeInMilliseconds);
}

// detectar quando a página foi rolada em 10% da altura total
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var pageHeight = document.body.offsetHeight;
  if (scrollPosition > pageHeight * 0.1) {
    // aplicar o estilo CSS quando a página foi rolada em 10% da altura total
    var playerWrapper = document.getElementById('player-wrapper');
    playerWrapper.style.position = 'fixed';
    playerWrapper.style.top = '50%'; // define a posição no meio vertical
    playerWrapper.style.right = '0'; // define a posição na borda direita
    playerWrapper.style.transform = 'translateY(-100%) scale(0.8)'; // define o tamanho do vídeo para 50% e o move para cima pela metade da altura
  } else {
    // restaurar o estilo CSS original quando a página voltar ao topo
    var playerWrapper = document.getElementById('player-wrapper');
    playerWrapper.style.position = '';
    playerWrapper.style.top = ''; // remove o valor definido
    playerWrapper.style.right = ''; // remove o valor definido
    playerWrapper.style.transform = ''; // remove o tamanho e a posição definidos
  }
});

// whatsapp aqui 

function showMessage(event) {
  event.preventDefault();
  var popup = document.getElementById("popup-message");
  popup.classList.toggle("hidden");
}
