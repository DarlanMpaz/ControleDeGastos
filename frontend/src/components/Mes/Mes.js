import './mes.css'

function Mes(props) {
  return (
    <div className='Mes'>
        <p>{props.name}</p>
        <p>{props.number}</p>
    </div>
  );
}

export default Mes;