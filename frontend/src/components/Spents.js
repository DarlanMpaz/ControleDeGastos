import {Link} from 'react-router-dom';
import './spents.css';

function Spents() {
  return (
    <div className="Spents">
      <h1>Gastos</h1>
      <Link to="/">Home</Link>
      <div className="gastos">
        <div className="item-gastos">
        <ul>
          <li>Internet</li>
          <li>GPS Net</li>
        </ul>
        <span className="quanto">R$ 121,00</span>
        <span className="como">Débito</span>
        <span className="quando">26/12/2020</span>
      </div>
        <div className="item-gastos">
        <ul>
          <li>Internet</li>
          <li>GPS Net</li>
        </ul>
        <span className="quanto">R$ 121,00</span>
        <span className="como">Débito</span>
        <span className="quando">26/12/2020</span>
      </div>
        <div className="item-gastos">
        <ul>
          <li>Internet</li>
          <li>GPS Net</li>
        </ul>
        <span className="quanto">R$ 121,00</span>
        <span className="como">Débito</span>
        <span className="quando">26/12/2020</span>
      </div>
        <div className="item-gastos">
        <ul>
          <li>Internet</li>
          <li>GPS Net</li>
        </ul>
        <span className="quanto">R$ 121,00</span>
        <span className="como">Débito</span>
        <span className="quando">26/12/2020</span>
      </div>
      </div>
      <div className="somas">
        <span className="total">TOTAL: R$124,00</span>          
      </div>
      <ul>
        <li>D: R$500,00</li>
        <li>C: R$500,00</li>
        <li>A: R$1024,00</li>
      </ul>
    </div>
  );
}

export default Spents