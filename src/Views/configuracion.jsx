import { ConfigDashboard } from "../components/configuracionDashboard/configuracionDashboard";
import { NavbarMenu } from "../components/navbar/navbar";

export const ConfiguracionDashboard = function() {

  return (   
      <>  
        <NavbarMenu />
            <div style={{marginLeft: "0.5em", marginRight: "4em"}}>
                <ConfigDashboard/>
            </div>
      </>
  )
}  
