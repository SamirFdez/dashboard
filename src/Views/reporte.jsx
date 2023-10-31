import { NavbarMenu } from "../components/navbar/navbar";
import { EstatusOperadores } from "../components/estatusOperadores/estatusOperadores";

export const Reporte = function () {
  // const tiempoAleatorio = Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000;

  // setTimeout(() => {
  //   location.reload();
  // }, tiempoAleatorio);

  return (
    <>
      <EstatusOperadores />
      <NavbarMenu />
    </>
  );
};
