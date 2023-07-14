import { CantidadDeTurnos } from "../../components/cantidadDeTurnos/cantidadDeTurnos"
import { EstatusColaboradores } from "../../components/estatusColaboradores/estatusColaboradores"
import { EstatusEstaciones } from "../../components/estatusEstaciones/estatusEstaciones"
import { Footer } from "../../components/footer/footer"
import { Header } from "../../components/header/header";
import { NavBar } from "../../components/navbar/navbar";


export const Estacion = function() {

  return (   
      <>  
        <NavBar/>
          <div style={{marginLeft: "4.5em", marginRight: "4.5em"}}>
            <Header/>
            <CantidadDeTurnos/>
            <EstatusEstaciones/>
            <EstatusColaboradores/>
          </div>
          <Footer/> 
      </>
)
 
}  
