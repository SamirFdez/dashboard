import { CantidadDeTurnos } from "../../components/cantidadDeTurnos/cantidadDeTurnos"
import { EstatusColaboradores } from "../../components/estatusColaboradores/estatusColaboradores"
import { EstatusEstaciones } from "../../components/estatusEstaciones/estatusEstaciones"

export const Estacion = function() {

  return (   
      <>
        <CantidadDeTurnos/>
        <EstatusEstaciones/>
        <EstatusColaboradores/>
      </>
)
 
}  