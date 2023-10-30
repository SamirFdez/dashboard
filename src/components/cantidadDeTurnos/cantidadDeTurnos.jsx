import React, { useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { CantidadDeTurnosCard } from "./cantidadDeTurnosCard";

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
        <Row className="rowTitle">
          <h3 className="title">Turnos en espera</h3>
        </Row>

        <Row className="cantidadDeTurnos">
          {cantidadTurno.length
            ? cantidadTurno.map((canturno, index) => (
                <Col
                  xs="auto"
                  key={index}
                  style={{ paddingLeft: "8px", paddingRight: "8px" }}
                >
                  <CantidadDeTurnosCard canturno={canturno} />
                </Col>
              ))
            : null}
        </Row>
      </div>
    </>
  );
};
