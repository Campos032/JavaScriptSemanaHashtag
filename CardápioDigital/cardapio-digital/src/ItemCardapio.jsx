// export function ItemCardapio(props) {: Define uma função chamada ItemCardapio que é exportada para ser
//  utilizada em outros arquivos. Essa função é um componente funcional do React e aceita props como argumento.
export function ItemCardapio(props) {
    // <div className="container-item-cardapio">: Cria um elemento div com a classe CSS "container-item-cardapio".
    // Isso envolve todos os elementos dentro do componente.
    return <div className="container-item-cardapio">
        <div>
            {/*Renderiza um título de nível 2 (h2) com o conteúdo vindo da propriedade nome. As propriedades em 
            React são passadas através dos atributos (props) do componente.*/}
            <h2>{props.nome}</h2>
            {/*<p>{props.preco}</p>: Renderiza um parágrafo (<p>) com o conteúdo vindo da propriedade preco.*/}
            <p>{props.preco}</p>
            {/*<p>{props.descricao}</p>: Renderiza outro parágrafo com o conteúdo vindo da propriedade descricao.*/ }
            <p>{props.descricao}</p>
        </div>
        {/*<img src={props.imagem} alt="" />: Adiciona uma imagem ao componente, onde o atributo src é definido pela 
        propriedade imagem e o atributo alt está vazio.*/}
        <img src={props.imagem} alt="" />
    </div>
}
// <img src={props.imagem} alt="" />: Adiciona uma imagem ao componente, onde o atributo src é definido pela propriedade
// imagem e o atributo alt está vazio.