import './despesa.css'
import { FiTrash } from 'react-icons/fi'

function Despesa(props) {
    return (
      <div className="Despesa">
        <div className="despesa-descricao">{props.descricao}</div>   
        <div className="despesa-valor">{props.valor}</div>
        <div className="despesa-data">{props.data}</div>
        <div className="despesa-remove"><FiTrash /></div>
      </div>
    );
  }
  
  export default Despesa;