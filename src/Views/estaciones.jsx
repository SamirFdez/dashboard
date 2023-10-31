import { NavbarMenu } from "../components/navbar/navbar";
import { EstacionsCards } from "../components/estacionesCards/estacionesCards";

export const Estaciones = function() {

  const tiempoAleatorio = Math.floor(Math.random() * (90000 - 60000 + 1)) + 60000;
  setTimeout(() => {
    location.reload();
  }, tiempoAleatorio);

  return (   
    <>  
      <NavbarMenu/>
      <EstacionsCards/>
    </>
  )
}   