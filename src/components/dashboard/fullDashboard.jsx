import React from "react";
import { Row, Col } from "react-bootstrap";
import { CantidadDeTurnos } from "../cantidadDeTurnos/cantidadDeTurnos";
import { TurnosTransferidos } from "../turnosTransferidos/turnosTransferidos";
import { EstatusEstaciones } from "../estatusEstaciones/estatusEstaciones";
import { EstatusColaboradores } from "../estatusColaboradores/estatusColaboradores";

export const FullDashboard = () => {
  return (
    <>
      <Row style={{ margin: "0px", display: "flex", justifyContent: "center" }}>
        <Col xl={3} lg={3} md={12}>
          <CantidadDeTurnos />
          <TurnosTransferidos/>
          <EstatusEstaciones />
        </Col>
        <Col xl={7} lg={6} md={12}>
          <EstatusColaboradores />
          
        </Col>
        <Col xl={2} lg={3} md={12}>
        <CantidadDeTurnos />

        </Col>
      </Row>




















      {/* <div className="grid-container">
        <CantidadDeTurnos/>


        <div className="grid2">2</div>
        <div className="grid3">3</div>
      </div> */}
    </>
  );
};
