import TextoColorido from './components/textoColorido'

function App() {
  return (
    <div>
      <h1>Desafio 1 - Texto Colorido</h1>
      <TextoColorido texto="React é poderoso!" cor="green" />
      <TextoColorido texto="mais um desafio concluido, vamos prosseguindo!" cor="blueviolet" />
    </div>
  );
}


// import Button from './components/Button';

// function App() {
//   return (
//     <div>
//       <h1>Desafio 2 – Botão com Label</h1>
//       <Button label="Baixar CV" />
//       <Button label="Contato" />
//       <Button label="Ver Projetos" />
//     </div>
//   );
// }


export default App;
