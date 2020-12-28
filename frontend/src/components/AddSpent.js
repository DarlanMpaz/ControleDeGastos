import './AddSpent.css';
import ModalMenu from './modalMenu'

function AddSpent() {
  return (
    <div className="addSpent">
        <h1>Novo Gasto</h1>
        <div className="form">
            <label for="quando">Quando?</label>
            <input name="quando" type="date" placeholder="Quando"/>

            <label for="quanto">Quanto?</label>
            <input name="quanto" type="text" placeholder="Valor do gasto"/>

            <label for="oque">O quê?</label>
            <input name="oque" type="text" placeholder="O que foi comprado?"/>

            <label for="onde">Onde?</label>
            <input name="onde" type="text" placeholder="Onde foi comprado?"/>

            <label for="como">Como?</label>
            <select name="como">
              <option id="1">Débito</option>
              <option id="2">Crédito</option>
              <option id="3">Dinheiro</option>
            </select>
            <input type="submit" className="button" value="Feito"/>
        </div>
        <ModalMenu/>
    </div>
  );
}

export default AddSpent