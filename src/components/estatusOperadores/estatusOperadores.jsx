import React, { useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { EstatusOperadoresCard } from "./estatusOperadoresCard";

export const EstatusOperadores = function () {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const estatusOperadores = import.meta.env.VITE_APP_API_estatusOperadores;
  const ApiKey = import.meta.env.VITE_APP_APIKEY;
  const [operadores, setOperadores] = React.useState(null);

  const config = {
    headers: {
      "Content-Type": "application/json",
      APIKey: ApiKey,
    },
  };

  const getEstatusOperadores = async () => {
    const response = await axios.get(baseUrl + estatusOperadores, config);
    setOperadores(response.data);
  };

  useEffect(() => {
    getEstatusOperadores();
  }, []);

  if (!operadores) {
    return null;
  }

  return (
    <>
      <div>
        <Row className="rowTitle" style={{ margin: "0.5em" }}>
          <h3 className="title" style={{ textAlign: "center" }}>
            Estatus Operadores
          </h3>
        </Row>
        <Row className="estatusOperadores">
          {operadores.length
            ? operadores.map((operadoresReporte, index) => {
                const name = operadoresReporte.NOMBRE;
                const nameDivider = name.split(" ");
                return (
                  <Col
                    xs="auto"
                    key={index}
                    style={{ paddingLeft: "4px", paddingRight: "4px" }}
                  >
                    <EstatusOperadoresCard
                      operadoresReporte={operadoresReporte}
                      nameDivider={nameDivider}
                    />
                  </Col>
                );
              })
            : null}
        </Row>
      </div>
    </>
  );
};
