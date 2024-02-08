// Código do Cliente (Frontend com Socket.IO):
// Obtém a referência do botão de envio no DOM.
const botaoEnviar = document.getElementById('enviar');
// Obtém a referência da caixa de entrada de texto no DOM.
const caixaMensagem = document.getElementById('texto');
// Obtém a referência do elemento de chat no DOM.
const chat = document.getElementById('mensagens');
// Cria uma conexão Socket.IO do cliente para o servidor.
const socket = io();

// Adiciona um ouvinte para o evento de clique no botão de envio.
botaoEnviar.addEventListener('click', () => {
    // Verifica se a caixa de mensagem não está vazia.
    if (caixaMensagem.value !== ""){
        // Emite a nova mensagem para o servidor.
        socket.emit('nova mensagem', caixaMensagem.value);
        // Limpa o conteúdo da caixa de mensagem.
        caixaMensagem.value = "";
    } 
})

// Adiciona um ouvinte para eventos de 'nova mensagem' recebidos do servidor.
socket.addEventListener('nova mensagem', (msg) => {
    // Cria um elemento <li> para a nova mensagem.
    const elementoMensagem = document.createElement('li')  // <li></li>
    // Define o conteúdo de texto da mensagem no elemento <li>.
    elementoMensagem.textContent = msg;  // <li>Mensagem</li>
    // Adiciona a classe 'mensagem' ao elemento <li>.
    elementoMensagem.classList.add('mensagem');  // <li class='mensagem'>Mensagem</li>
    // Adiciona o elemento <li> ao elemento de chat no DOM.
    chat.appendChild(elementoMensagem);  // <div id='mensagens'><li class='mensagem'>Mensagem</li></div>
})
