import { NavbarMenu } from "../components/navbar/navbar";
import { FullDashboard } from "../components/dashboard/fullDashboard";

export const Dashboard = function() {

  const tiempoAleatorio = Math.floor(Math.random() * (90000 - 60000 + 1)) + 60000;
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
