import { Header } from "../components/header/header";
import { NavBar } from "../components/navbar/navbar";
import { EstacionsCards } from "../components/EstacionesCards/EstacionesCards";

export const Estaciones = function() {

  setTimeout(() => {
    window.location.reload();
  }, 60000);

  return (   
    <>  
      <NavBar/>
        <div style={{marginLeft: "4em", marginRight: "4em"}}>
          <Header/>
          <EstacionsCards/>
        </div>
    </>
  )
}   