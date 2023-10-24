import React, { useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, Dropdown, Button, ButtonGroup } from "react-bootstrap";
import { TiempoTurno } from "./tiempoTurno";
import { TiempoLogOut } from "./tiempoLogOut";
import { SlUser } from "react-icons/sl";

export const EstatusColaboradores = function () {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const estatusColaboradesProc = import.meta.env.VITE_APP_API_estatusOperadores;
  const ApiKey = import.meta.env.VITE_APP_APIKEY;
  const [operadoresOn, setOperadoresOn] = React.useState(null);
  const [operadoresOff, setOperadoresOff] = React.useState(null);

  const config = {
    headers: {
      "Content-Type": "application/json",
      APIKey: ApiKey,
    },
  };

  const getOperadoresOn = async () => {
    const response = await axios.get(baseUrl + estatusColaboradesProc, config);
    setOperadoresOn(response.data);
  };

  useEffect(() => {
    getOperadoresOn();
  }, []);

  if (!operadoresOn) {
    return null;
  }

  return (
    <>
      <div>
        <Row
          className="rowTitle justify-content-between align-items-center"
          style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
        >
          <Col xs={7}>
            <h3 className="title" style={{ textAlign: "left" }}>
              <SlUser style={{ marginRight: "10px" }} /> Colaborador
            </h3>
          </Col>
          <Col xs={5}>
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle
                split
                variant="secondary"
                id="dropdown-split-basic"
              />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row className="colabadoresOnline">
          {operadoresOn?.length > 0 &&
            operadoresOn
              .filter((colaboradores) => colaboradores.ACCION === "LOGIN")
              .map((operadoresOn, index) => (
                <Col
                  md={3}
                  sm={5}
                  xs={11}
                  key={index}
                  className={
                    operadoresOn.error === 1
                      ? "cardYellow"
                      : operadoresOn.error === 2
                      ? "cardRed"
                      : operadoresOn.error === 3
                      ? "cardGreen"
                      : "cardGray"
                  }
                >
                  <Row className="rowImgName">
                    <Col xs={5}>
                      <img
                        src={`data:image/jpeg;base64,${operadoresOn.Foto}`}
                        className="cardImg"
                      />
                    </Col>

                    <Col xs={7} className="cardName">
                      <h6 style={{ marginTop: "1em", fontSize: "12px" }}>
                        {operadoresOn.NOMBRE}
                      </h6>
                      <h6 style={{ marginTop: "0.2em", fontSize: "px" }}>
                        {operadoresOn.DESCRIPCION}
                      </h6>
                    </Col>
                  </Row>

                  <Row className="rowInfo" style={{ marginTop: "0.7em" }}>
                    <Col
                      className="rowEstacion"
                      style={{ marginRight: "0.7em" }}
                    >
                      <h6 style={{ marginTop: "0.2em", fontSize: "20px" }}>
                        {operadoresOn.NumeroEstacion}
                      </h6>
                      <h6 style={{ fontSize: "18px" }}>
                        Estación de {operadoresOn.DescripcionPantalla}
                      </h6>
                    </Col>

                    <Col className="rowEstacion">
                      <h6 style={{ marginTop: "0.5em", fontSize: "18px" }}>
                        Turno:
                      </h6>
                      <h6 style={{ fontSize: "18px" }}>
                        {" "}
                        {operadoresOn.TURNO}{" "}
                      </h6>
                      {operadoresOn.TIEMPO !== "--:--:--" ? (
                        <TiempoTurno operadoresOn={operadoresOn.TIEMPO} />
                      ) : (
                        <h6 style={{ fontSize: "18px" }}> --:--:-- </h6>
                      )}
                    </Col>
                  </Row>

                  <Row className="rowPausa" style={{ marginTop: "0.7em" }}>


                        <h6 style={{ fontSize: "16px", margin: "0px" }}>
                          {operadoresOn.MENSAJE}
                        </h6>
                  </Row>

                  <Row className="rowCliente" style={{ marginTop: "0.7em" }}>
                      <Col>
                        {operadoresOn.NombreCita !== null ? (
                          <h6 style={{ fontSize: "16px" }}>
                            {operadoresOn.NombreCita}
                          </h6>
                        ) : null}
                        {/* <h6 style={{fontSize: "16px"}}> {operadoresOn.NumeroCita} </h6> */}
                      </Col>
                  </Row>
                </Col>
              ))}
        </Row>
      </div>
    </>
  );
};
