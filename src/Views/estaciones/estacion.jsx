import { CantidadDeTurnos } from "../../components/cantidadDeTurnos/cantidadDeTurnos"
import { EstatusColaboradores } from "../../components/estatusColaboradores/estatusColaboradores"
import { EstatusEstaciones } from "../../components/estatusEstaciones/estatusEstaciones"
import { Footer } from "../../components/footer/footer"
import { Header } from "../../components/header/header";

export const Estacion = function() {

  return (   
      <>  
        <Header/>
        <CantidadDeTurnos/>
        <EstatusEstaciones/>
        <EstatusColaboradores/>
        <Footer/>
      </>
)
 
}  