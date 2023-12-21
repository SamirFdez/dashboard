import { ConfigDashboard } from "../components/configuracionDashboard/configuracionDashboard";
import { NavbarMenu } from "../components/navbar/navbar";
import { HistoricoTurnoTable } from "../components/historicoTurno/historicoTurnoTable";


export const ConfiguracionDashboard = function () {
  return (
    <>
      <HistoricoTurnoTable />
      {/* <ConfigDashboard /> */}
      <NavbarMenu />
    </>
  );
};
