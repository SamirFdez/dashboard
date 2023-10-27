
import { NavbarMenu } from "../components/navbar/navbar";

export const Reporte = function() {

  const tiempoAleatorio = Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000;

  setTimeout(() => {
    location.reload();
  }, tiempoAleatorio);

  return (   
    <>  
      <NavbarMenu />
    </>
  )
}   