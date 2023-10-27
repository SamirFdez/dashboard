import React, { useEffect } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";

export const TurnosTransferidos = function () {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const turnosTransferidosProc = import.meta.env
    .VITE_APP_API_turnosTransferidos;
  const ApiKey = import.meta.env.VITE_APP_APIKEY;
  const [turnoTransferido, setTurnoTransferido] = React.useState(null);

  const config = {
    headers: {
      "Content-Type": "application/json",
      APIKey: ApiKey,
    },
  };

  const getTurnosTransferidos = async () => {
    const response = await axios.get(baseUrl + turnosTransferidosProc, config);
    setTurnoTransferido(response.data);
  };

  useEffect(() => {
    getTurnosTransferidos();
  }, []);

  if (!turnoTransferido) {
    return null;
  }

  return (
    <>
      <div>
        <Row className="rowTitle">
          <h3 className="title">Turnos transferitos</h3>
        </Row>

        <Row className="TurnosTransferidos">
          {turnoTransferido.map((turTransferido, index) => (
            <Col
              xs="auto"
              key={index}
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <Card
                className={
                  turTransferido.ERROR === 1 &&
                  turTransferido.TIEMPOESPERA < 1000
                    ? "turTransferidoYellow"
                    : turTransferido.ERROR === 2 &&
                      turTransferido.TIEMPOESPERA < 1000
                    ? "turTransferidoRed"
                    : turTransferido.TIEMPOESPERA > 999
                    ? "turTransferidoOrange"
                    : "turTransferidoGray"
                }
              >
                <Card.Body style={{ padding: "0px" }}>
                  <h6
                    className={
                      turTransferido.ERROR === 1 &&
                      turTransferido.TIEMPOESPERA < 1000
                        ? "turTransferidoCardTitleYellow"
                        : "turTransferidoCardTitleAll"
                    }
                  >
                    {turTransferido.Descripcion.length > 15
                      ? `${turTransferido.Descripcion.slice(0, 17)}...`
                      : turTransferido.Descripcion}
                  </h6>
                  <Row>
                    <div className="d-flex justify-content-around">
                      <div className="turTransferidoCardBody align-middle">
                        <h6 style={{ margin: "0px" }}>
                          {turTransferido.CANTIDAD} Turno
                        </h6>
                      </div>
                      <div className="turTransferidoCardBody">
                        <h6 style={{ margin: "0px" }}>
                          {turTransferido.TIEMPOESPERA > 999
                            ? "∞ min"
                            : `${turTransferido.TIEMPOESPERA} min`}
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
