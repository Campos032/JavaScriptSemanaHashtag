// export function Navegacao(props) {: Define uma função chamada Navegacao que é exportada para ser utilizada em outros 
// arquivos. Essa função é um componente funcional do React e aceita props como argumento.
export function Navegacao(props) {
    // Não foi preciso importar o arquivo css pois só é necessário importar em um arquivo jsx que o css terá acesso 
    // a todos os arquivos jsx
    // <div className="navegacao">: Cria um elemento div com a classe CSS "navegacao". Isso envolve todos os elementos 
    // dentro do componente.
    return <div className="navegacao">
            {/*<input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => 
            props.atualizarPaginaSelecionada(0)}/>: Cria um elemento input do tipo rádio. O atributo name agrupa os botões
            de opção, o id fornece uma identificação única, defaultChecked define este como o botão inicialmente 
            selecionado, e onClick chama a função props.atualizarPaginaSelecionada(0) quando o botão é clicado*/}
            <input type="radio" name="opcao-pagina" id="pagina-0" 
            defaultChecked onClick={() => props.atualizarPaginaSelecionada(0)}/>
            {/*<label htmlFor="pagina-0">Pratos Principais</label>: Cria um elemento label associado ao botão de rádio com
            o ID "pagina-0". Isso melhora a acessibilidade e a usabilidade.*/}
            <label htmlFor="pagina-0">Pratos Principais</label>
            {/*Os itens 3 e 4 se repetem para os outros dois conjuntos de botões de rádio e rótulos (para "Sobre Mesas" 
            e "Bebidas"), com IDs e textos apropriados.*/}
            <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => props.atualizarPaginaSelecionada(1)}/>
            <label htmlFor="pagina-1">Sobre Mesas</label>
            <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => props.atualizarPaginaSelecionada(2)}/>
            <label htmlFor="pagina-2">Bebidas</label>
           </div>
}
// Este componente é um grupo de botões de rádio representando opções de navegação, onde cada opção está associada a uma
// página específica. Quando um botão é clicado, a função props.atualizarPaginaSelecionada é chamada com o índice da 
// página correspondente como argumento. Isso sugere que o componente é parte de um aplicativo React mais amplo e que a 
// navegação entre páginas é controlada por um componente pai.

