import React from "react";
import { Row, Col } from "react-bootstrap";
import { CantidadDeTurnos } from "../cantidadDeTurnos/cantidadDeTurnos";
import { EstatusColaboradores } from "../estatusColaboradores/estatusColaboradores";

export const FullDashboard = () => {
  return (
    <>
      <Row style={{ margin: "0px" }}>
        <Col xl={3} lg={12} md={12}>
          <CantidadDeTurnos />
        </Col>
        <Col xl={7} lg={10} md={12}>
          <EstatusColaboradores />
        </Col>
        <Col xl={2} lg={2} md={12}>
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
