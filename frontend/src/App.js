import './app.css'

import Despesa from './components/Despesa'
import ButtonCreate from './components/ButtonCreate'

function App() {
  return (
    <div className="App">
      <h3>Registro de gastos</h3>  
      <Despesa descricao="Internet" valor="R$121,00" data="10" />
      <Despesa descricao="Agua" valor="R$150,00" data="04" />
      <ButtonCreate />
    </div>
  );
}

export default App;