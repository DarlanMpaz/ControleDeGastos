import './modalMenu.css'
import {Link} from 'react-router-dom'
import {FiPlusCircle, FiHome, FiGrid} from 'react-icons/fi'

function ModalMenu() {
  return (
    <div className="modal-acoes">

      <Link to="/" className="modal-acao--home link"><FiHome className="icon"/></Link>

      <Link to="/Spents" className="modal-acao--gastos link"><FiGrid className="icon"/></Link>

      <Link className="modal-acao--nova link"><FiPlusCircle className="icon"/></Link>
      
    </div>
  );
}

export default ModalMenu