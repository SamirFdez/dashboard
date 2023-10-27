import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";

export const EstatusEstaciones = function () {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const estatusEstacionesProc = import.meta.env.VITE_APP_API_estatusEstaciones;
  const ApiKey = import.meta.env.VITE_APP_APIKEY;
  const [estatusEstaciones, setEstatusEstaciones] = useState(null);

  const config = {
    headers: {
      "Content-Type": "application/json",
      APIKey: ApiKey,
    },
  };

  const getEstatusEstaciones = async () => {
    const response = await axios.get(baseUrl + estatusEstacionesProc, config);
    setEstatusEstaciones(response.data);
  };

  useEffect(() => {
    getEstatusEstaciones();
  }, []);

  if (!estatusEstaciones) {
    return null;
  }

  return (
    <>
      <div>
        <Row className="rowTitle">
          <h3 className="title">Estatus estaciones</h3>
        </Row>

        <Row className="TurnosTransferidos">
          {estatusEstaciones.map((estEstaciones, index) => (
            <Col
              xs="auto"
              key={index}
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <Card
                className="turTransferidoGray"
              >
                <Card.Body style={{ padding: "0px" }}>
                  <h6
                    className="turTransferidoCardTitleAll"
                  >
                    {estEstaciones.Estacion.length > 15
                      ? `${estEstaciones.Estacion.slice(0, 17)}...`
                      : estEstaciones.Estacion}
                  </h6>
                  <Row>
                    <div className="d-flex justify-content-around">
                      <div className="turTransferidoCardBody align-middle">
                        <h6 style={{ margin: "0px" }}>
                          Onl. {estEstaciones.EnLinea}
                        </h6>
                      </div>
                      <div className="turTransferidoCardBody">
                        <h6 style={{ margin: "0px" }}>
                          Disp. {estEstaciones.Disponibles}
                        </h6>
                      </div>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
