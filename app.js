// Função do botão "Clique aqui"
function mostrarMensagem() {
  document.getElementById('mensagem').textContent = "Você clicou no botão!";
}

// Controle do botão instalar PWA
let deferredPrompt;
const installBtn = document.createElement('button');
installBtn.textContent = 'Instalar App';
installBtn.style.display = 'none';
installBtn.style.padding = '10px 20px';
installBtn.style.fontSize = '16px';
installBtn.style.marginTop = '20px';
document.body.appendChild(installBtn);

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'inline-block';

  installBtn.addEventListener('click', () => {
    installBtn.style.display = 'none';
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação');
      } else {
        console.log('Usuário recusou a instalação');
      }
      deferredPrompt = null;
    });
  });
});
