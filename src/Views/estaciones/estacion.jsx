import { CantidadDeTurnos } from "../../components/cantidadDeTurnos/cantidadDeTurnos"
import { EstatusColaboradores } from "../../components/estatusColaboradores/estatusColaboradores"
import { EstatusEstaciones } from "../../components/estatusEstaciones/estatusEstaciones"
import { Footer } from "../../components/footer/footer"
import { Header } from "../../components/header/header";
import { NavBar } from "../../components/navbar/navbar";
import {updateAuthenticationState} from '../../store/authentication'
import {useDispatch} from 'react-redux'

export const Estacion = function() {

  const dispatch = useDispatch();

  setTimeout(() => {
    window.location.reload();
  }, 600000);

  return (   
      <>  
        <NavBar/>
          <div style={{marginLeft: "0.5em", marginRight: "4em"}}>
            <Header/>
            <CantidadDeTurnos/>
            <EstatusEstaciones/>
            <EstatusColaboradores/>
          </div>
          <Footer/> 
      </>
)
 
}  
