import logo from './logo.svg';
import './App.css';

const titulo = <h1>Minha pagina</h1>;
const compromisses = ['Aula 01 de React', 'Aula 02 de React', 'Projeto de react'];
// const task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

function App() {
  return (
    <div>{titulo}

      <ol>
        {compromisses.map((compromisse) => <li> {compromisse}  </li>)}
        
      </ol>

    </div>
  );
}

export default App;
