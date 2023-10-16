import React, { useEffect } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";

export const CantidadDeTurnos = function () {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const cantidadDeTurnosProc = import.meta.env.VITE_APP_API_cantidadDeTurnos;
  const ApiKey = import.meta.env.VITE_APP_APIKEY;
  const [cantidadTurno, setCantidadTurno] = React.useState(null);

  const config = {
    headers: {
      "Content-Type": "application/json",
      APIKey: ApiKey,
    },
  };

  const getCantidadDeTurnos = async () => {
    const response = await axios.get(baseUrl + cantidadDeTurnosProc, config);
    setCantidadTurno(response.data);
  };

  useEffect(() => {
    getCantidadDeTurnos();
  }, []);

  if (!cantidadTurno) {
    return null;
  }

  return (
    <>
      <div>
        <Row
          className="rowTitle"
          style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
        >
          <h3 className="title">
            Cantidad de turnos Vs tiempo de espera
          </h3>
        </Row>

        <Row>
          {cantidadTurno.map((canturno, index) => (
            <Col xs="auto">
              <Card
                className={
                  canturno.ERROR === 1
                    ? "canturnoYellow"
                    : canturno.ERROR === 2
                    ? "canturnoRed"
                    : "canturnoGray"
                }
                key={index}
              >
                <Card.Body style={{ padding: "0px" }}>
                  <h6
                    className={
                      canturno.ERROR === 1
                        ? "canturnoCardTitleYellow"
                        : "canturnoCardTitleAll"
                    }
                  >
                    {canturno.DESCRIPCION.length > 15
                      ? `${canturno.DESCRIPCION.slice(0, 20)}...`
                      : canturno.DESCRIPCION}
                  </h6>
                  <Row>
                    <div className="d-flex justify-content-around">
                      <div className="canturnoCardBody align-middle">
                        <h6 style={{ margin: "0px" }}> {canturno.CANTIDAD} turno </h6>
                      </div>
                      <div className="canturnoCardBody">
                        <h6 style={{ margin: "0px" }}>
                          {canturno.TIEPOESPERA > 1000
                            ? "∞ min"
                            : canturno.TIEPOESPERA} min
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
