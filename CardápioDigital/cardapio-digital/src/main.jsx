//  Importa o módulo React do pacote 'react'. O React é necessário para utilizar a sintaxe JSX e para criar 
// componentes React
import React from 'react'
// Importa o módulo ReactDOM diretamente do cliente ('react-dom/client'). O ReactDOM é utilizado para 
// renderizar componentes React no DOM.
import ReactDOM from 'react-dom/client'
// Importa a função App do arquivo 'App.jsx'. O App é um componente React que será renderizado na aplicação.
import { App } from './App.jsx'  // importa a função app do ar1quivo App.jsx

// Usa o método createRoot de ReactDOM para criar uma "raiz" (root) no DOM, associada ao elemento com o 
// ID 'root'. A função render é então chamada para renderizar o conteúdo dentro dessa raiz.
ReactDOM.createRoot(document.getElementById('root')).render(
  // Inicia o modo estrito do React. O StrictMode é utilizado para sinalizar potenciais problemas no código
  // durante o desenvolvimento, como efeitos colaterais secundários indesejados.
  <React.StrictMode>
    {/*Renderiza o componente App dentro do modo estrito*/}
    <App />
  </React.StrictMode>,
)

// Em resumo, este código está configurando e renderizando um componente React chamado App dentro do modo estrito
// do React. A renderização ocorre no elemento do DOM com o ID 'root', utilizando o método createRoot para criar 
// uma raiz de renderização. Isso é uma forma moderna de renderização no React, e a utilização do modo estrito ajuda
// a identificar e corrigir potenciais problemas no código.
