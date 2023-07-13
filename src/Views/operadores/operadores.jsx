import { Footer } from "../../components/footer/footer"
import { Header } from "../../components/header/header";
import { EstatusOperadores } from "../../components/estatusOperadores/estatusOperadores";
import { NavBar } from "../../components/navbar/navbar";


export const Operadores = function() {

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