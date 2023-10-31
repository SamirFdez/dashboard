import { NavbarMenu } from "../components/navbar/navbar";
import { EstatusOperadores } from "../components/estatusOperadores/estatusOperadores";

export const Reporte = function () {

  const tiempoAleatorio = Math.floor(Math.random() * (90000 - 60000 + 1)) + 60000;
  setTimeout(() => {
    location.reload();
  }, tiempoAleatorio);

  return (
    <>
      <EstatusOperadores />
      <NavbarMenu />
    </>
  );
};
