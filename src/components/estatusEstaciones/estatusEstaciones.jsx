import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { EstatusEstacionesCard } from "./estatusEstacionesCard";

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
          {estatusEstaciones.length 
            ? estatusEstaciones.map((estEstaciones, index) => (
                <Col
                  xs="auto"
                  key={index}
                  style={{ paddingLeft: "8px", paddingRight: "8px" }}
                >
                  <EstatusEstacionesCard estEstaciones={estEstaciones} />
                </Col>
              ))
            : null}
        </Row>
      </div>
    </>
  );
};
