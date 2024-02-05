// Pega as informações da tag imagem-visualizacao, onde está nossa imagem de visualização
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
// Pega o item que tem o id do titulo do produto
const tituloProduto = document.getElementById('titulo-produto');
// Pega o item que tem o id nome-cor-selecionada
const nomeCor = document.getElementById('nome-cor-selecionada');
// Pega os itens que tem os seguintes Id's, que são as miniaturas dentro da tag
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

// Cria o dicionário/objeto das cores
const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};


const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};


const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};


const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};


const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};

// Cria uma lista que possui o dicionário de cada cor 
const opcoesCores = [verdeCipreste ,azulInverno, meiaNoite, estelar, rosaClaro]
// Cria uma lista com os tamanhos do relógio
const opcoesTamanho = ['41 mm', '45 mm']

// Imagem selecionada é o número da imagem qeu inicia selecionada
let imagemSelecionada = 1;
// Tamanho selecionado é o tamanho de imagem que vem por padrão selecionado
let tamanhoSelecionado = 1;
// Número da cor que vem por padrão selecionada
let corSelecionada = 1;

// Adicionar a função aos botões em que queremos que a execute
function trocarImagem() {
    // Pega o id da imagem de visualização 
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id; // checked sempre pega o id da imagem que está selecionada
    // Pega o primeiro caracter do id
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    // Muda o caminho/tag da pasta da imagem de visualização conforme a intereação do usuário
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
    // Imagem selecionada pega o número da imagem e atualiza de acordo com o nome na pasta da cor 
    // opcoesCores[corSelecionada].pasta pega o item na lista e busca o nome da chave 'pasta' no dicionario do item na lista
}

// Adicionar a função aos botões em que queremos que a execute
function trocarTamanho() {
    // Segue a mesma lógica da função trocar imagem
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0); 
    // Muda o título do produto, innerText pega o texto dentro da tag
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];
    // opcoesCores[corSelecionada].nome pega o valor nome no dicionário do item na lista
    // opcoesTamanho[tamanhoSelecionado] pega o tamanho selecionado
    // caixa-pequena é uma classe no css que diminui a escala da imgagem, e é aplicada conforme a interação do usuário
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        // se 41 mm for selecionada a classe é adicionada ao elemento
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        // se 45 mm for selecionada a classe é removida do elemento
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

// Adicionar a função aos botões em que queremos que a execute
function trocarCor() {
    // Segue a mesma lógica das funções anteriores
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    // Também muda o título do produto
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];  
    // troca nome da cor selecionada acima da opção de selecionar as cores
    nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome;
    // trocar imagens da miniaturas exibidas
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';
    // trocar imagem da visualização
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
} 
