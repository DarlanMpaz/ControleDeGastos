import './spents.css';
import ModalMenu from './modalMenu'
import GastoCard from './GastoCard'
import ModalSoma from './ModalSoma'

function Spents() {
  return (
    <div className="spents">
      <ModalSoma />
      <div className="gastos">
        <GastoCard />
        <GastoCard />
        <GastoCard />
        <GastoCard />
        <GastoCard />
        <GastoCard />
        <GastoCard />
        <ModalMenu/>
      </div>
    </div>
  );
}

export default Spents