import { Footer } from "../../components/footer/footer"
import { Header } from "../../components/header/header";
import { EstatusOperadores } from "../../components/estatusOperadores/estatusOperadores";
import { NavBar } from "../../components/navbar/navbar";


export const Operadores = function() {

  setTimeout(() => {
    window.location.reload();
  }, 60000);

  return (   
    <>  
      <NavBar/>
        <div style={{marginLeft: "4em", marginRight: "4em"}}>
          <Header/>
          <EstatusOperadores/>
        </div>
      <Footer/> 
    </>
)
 
}   