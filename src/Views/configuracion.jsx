import { ConfigDashboard } from "../components/configuracionDashboard/configuracionDashboard";
import { Footer } from "../components/footer/footer"
import { Header } from "../components/header/header";
import { NavBar } from "../components/navbar/navbar";

export const ConfiguracionDashboard = function() {

  return (   
      <>  
        <NavBar/>
            <div style={{marginLeft: "0.5em", marginRight: "4em"}}>
                <Header/>
                <ConfigDashboard/>
            </div>
        <Footer/> 
      </>
)
 
}  