import './meses.css'
import Mes from '../Mes/Mes'
import Link, { NavLink } from 'react-router-dom'

function Meses() {

  let data = new Date()
  let mes = data.getMonth()

    let mesAtual = document.querySelectorAll('#month')
    console.log(mesAtual)

  return (
    <div className="Meses">
        
          <NavLink className="active">
            <Mes id="month" name="Jan" number="01" />
          </NavLink>
        
          <Mes id="month" name="Fev" number="02" />
        
          <Mes id="month" name="Mar" number="03" />
        
          <Mes id="month" name="Abr" number="04" />
        
          <Mes id="month" name="Mai" number="05" />
        
          <Mes id="month" name="Jun" number="06" />
        
          <Mes id="month" name="Jul" number="07" />
        
          <Mes id="month" name="Ago" number="08" />
        
          <Mes id="month" name="Set" number="09" />
        
          <Mes id="month" name="Out" number="10" />
        
          <Mes id="month" name="Nov" number="11" />
        
         <Mes id="month" name="Dez" number="12" />  

    </div>
  );
}

export default Meses;