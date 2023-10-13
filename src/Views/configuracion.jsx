import { ConfigDashboard } from "../components/configuracionDashboard/configuracionDashboard";
import { Header } from "../components/header/header";
import { NavbarMenu } from "../components/navbar/navbar";

export const ConfiguracionDashboard = function() {

  return (   
      <>  
        <NavbarMenu />
            <div style={{marginLeft: "0.5em", marginRight: "4em"}}>
                <Header/>
                <ConfigDashboard/>
            </div>
      </>
  )
}  
