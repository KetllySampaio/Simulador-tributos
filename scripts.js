document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o formulário e atualiza o status da conexão ao carregar a página
    initializeForm();
    atualizarStatusConexao();
});

// Função para inicializar o formulário e adicionar eventos
function initializeForm() {
    const form = document.getElementById('formCalculadora');

    // Adiciona um evento ao formulário para prevenir o comportamento padrão de envio
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previne o reload da página
        calcularImpostos(); // Chama a função que lida com o cálculo e a exibição dos resultados
    });
}

// Função que lida com o cálculo dos impostos
function calcularImpostos() {
    const receitaAnual = parseFloat(document.getElementById('receitaAnual').value);
    const despesasOperacionais = parseFloat(document.getElementById('despesasOperacionais').value);
    const categoria = document.getElementById('categoria').value;

    // Validação simples
    if (isNaN(receitaAnual) || isNaN(despesasOperacionais)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Cálculo básico de impostos (exemplo simplificado)
    let imposto = 0;
    switch (categoria) {
        case "1": // Comércio
            imposto = (receitaAnual - despesasOperacionais) * 0.06; // 6% de imposto
            break;
        case "2": // Serviços
            imposto = (receitaAnual - despesasOperacionais) * 0.08; // 8% de imposto
            break;
        case "3": // Indústria
            imposto = (receitaAnual - despesasOperacionais) * 0.05; // 5% de imposto
            break;
        default:
            alert("Categoria inválida.");
            return;
    }

    // Exibindo o resultado em um alerta ou na página
    alert(`O imposto a pagar é: R$ ${imposto.toFixed(2)}`);
}

// Verifica se o navegador suporta service workers e registra o service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
            console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch((error) => {
            console.log('Falha ao registrar o Service Worker:', error);
        });
}

// Evento para instalação do Web App (PWA)
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Previne a exibição automática do banner de instalação
    let deferredPrompt = event; // Guarda o evento para exibir o prompt manualmente

    const installButton = document.createElement('button');
    installButton.innerText = 'Instalar Aplicativo';
    installButton.classList.add('btn', 'btn-primary', 'mt-3');
    document.body.appendChild(installButton);

    // Exibe o prompt de instalação ao clicar no botão
    installButton.addEventListener('click', () => {
        deferredPrompt.prompt(); // Exibe o banner de instalação
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou a instalação');
            } else {
                console.log('Usuário recusou a instalação');
            }
            // Remove o botão após o clique
            installButton.remove();
            deferredPrompt = null; // Limpa o evento armazenado
        });
    });
});

// Função para atualizar o status de conexão
function atualizarStatusConexao() {
    const statusConexao = document.getElementById('statusConexao');
    if (navigator.onLine) {
        statusConexao.textContent = 'Você está online.';
        statusConexao.classList.remove('text-danger');
        statusConexao.classList.add('text-success');
    } else {
        statusConexao.textContent = 'Você está offline.';
        statusConexao.classList.remove('text-success');
        statusConexao.classList.add('text-danger');
    }
}

// Adiciona event listeners para mudanças de conexão
window.addEventListener('online', atualizarStatusConexao);
window.addEventListener('offline', atualizarStatusConexao);

// Criação de um elemento para exibir o status
const statusDiv = document.createElement('div');
statusDiv.id = 'statusConexao';
statusDiv.classList.add('text-center', 'mt-3');
document.body.insertBefore(statusDiv, document.querySelector('footer'));