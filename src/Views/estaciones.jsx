import { Header } from "../components/header/header";
import { NavbarMenu } from "../components/navbar/navbar";
import { EstacionsCards } from "../components/EstacionesCards/EstacionesCards";

export const Estaciones = function() {

  const tiempoAleatorio = Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000;

  setTimeout(() => {
    location.reload();

  }, tiempoAleatorio);

  return (   
    <>  
      <NavbarMenu />
        <div style={{marginLeft: "4em", marginRight: "4em"}}>
          <Header/>
          <EstacionsCards/>
        </div>
    </>
  )
}   