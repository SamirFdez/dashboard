import { NavbarMenu } from "../components/navbar/navbar";
import { FullDashboard } from "../components/dashboard/fullDashboard";

export const Dashboard = function() {

  const tiempoAleatorio = Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000;

  setTimeout(() => {
    location.reload();

  }, tiempoAleatorio);

  return (   
      <>  
        <NavbarMenu />
        <FullDashboard/>
      </>
)
 
}  
