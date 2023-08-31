import { CantidadDeTurnos } from "../components/cantidadDeTurnos/cantidadDeTurnos"
import { EstatusColaboradores } from "../components/estatusColaboradores/estatusColaboradores"
import { EstatusEstaciones } from "../components/estatusEstaciones/estatusEstaciones"
import { Header } from "../components/header/header";
import { NavBar } from "../components/navbar/navbar";

export const Estacion = function() {

  setTimeout(() => {
    window.location.reload();
  }, 60000);

  return (   
      <>  
        <NavBar/>
          <div style={{marginLeft: "0.5em", marginRight: "4em"}}>
            <Header/>
            <CantidadDeTurnos/>
            <EstatusEstaciones/>
            <EstatusColaboradores/>
          </div>
      </>
)
 
}  
