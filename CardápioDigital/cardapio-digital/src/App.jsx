// import { useState } from 'react';: Importa a função useState do pacote 
// 'react', que é uma funcionalidade do React para adicionar estado a componentes funcionais.
import { useState } from 'react';
// No react deve se usar o import para trazer algo de outro arquivo
import imagemRestaurante from './assets/hashtaurante.webp';
// Importa o aqruivo css
import './App.css';
// Importa o arquivo jsx
import { Navegacao } from './Navegação.jsx';
// Importa a função ItemCardapio do arquivo ItemCardapio
import { ItemCardapio } from './ItemCardapio.jsx';
// Importa as listas e OBJECT do arquivo cardapio
import { pratosPrincipais, sobremesas, bebidas } from './cardapio.js';


const paginaSelecionada = 0;
// Export possibilita o uso de função x em outro arquivo 
export function App() {
    //const paginasMenu = [pratosPrincipais, sobremesas, bebidas];: Cria um array chamado paginasMenu que contém as 
    // listas de pratos principais, sobremesas e bebidas importadas do arquivo 'cardapio.js'.
    const paginasMenu = [pratosPrincipais, sobremesas, bebidas];

    // const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);: Utiliza a função useState para criar um 
    // estado chamado paginaSelecionada com valor inicial 0. Também cria a função atualizarPaginaSelecionada que pode ser 
    // usada para atualizar o estado.
    const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

    return <>
            {/* Para usar o caminho da imagem, deve-se colocar entre chaves 
            para usar uma classe no arquivo css deve-se utilizar
             clossName='nome da clase'*/}
            <img src={imagemRestaurante} alt="" className='capa'/>
            {/*Renderiza o componente Navegacao, passando a função atualizarPaginaSelecionada como uma propriedade 
            chamada atualizarPaginaSelecionada.*/}
            <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
            {/*Utiliza a função map para iterar sobre os itens da lista correspondente à página selecionada e renderiza
             um componente ItemCardapio para cada item, passando as propriedades necessárias (nome, descrição, preço e 
             imagem).*/}
            <div className="menu">
                {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
            </div>
           </>
}

// Este componente App é a parte principal de um aplicativo React, onde a navegação entre diferentes páginas
// do menu é controlada por Navegacao, e os itens de cardápio são renderizados usando o componente ItemCardapio. O estado
// paginaSelecionada é gerenciado para controlar qual página do menu está atualmente selecionada.