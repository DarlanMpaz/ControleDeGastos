import './GastoCard.css'

function GastoCard() {
  return (
    <div className="gasto-card">
      <div className="gasto-descricao">
        <p className="gasto-descricao--oque">Fatura Internet</p>
        <p className="gasto-descricao--onde">Amigo Internet</p>
        <p className="gasto-descricao--quando">10/01/2021</p>
      </div>
      <div className="gasto-pagamento">
        <p className="gasto-pagamento--quanto">R$ 121,00</p>
        <p className="gasto-pagamento--como">Débito</p>
      </div>
    </div>
  );
}

export default GastoCard