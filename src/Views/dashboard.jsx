import { Header } from "../components/header/header";
import { NavBar } from "../components/navbar/navbar";
import { CantidadDeTurnos } from "../components/cantidadDeTurnos/cantidadDeTurnos"
import { EstatusColaboradores } from "../components/estatusColaboradores/estatusColaboradores"
import { EstatusEstaciones } from "../components/estatusEstaciones/estatusEstaciones"

export const Dashboard = function() {

  const tiempoAleatorio = Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000;

  setTimeout(() => {
    location.reload();

  }, tiempoAleatorio);

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
