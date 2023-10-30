import React, { useEffect } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { ColaboradoresOnlineCard } from "./colaboradoresOnlineCard";
import { SlUser } from "react-icons/sl";

export const ColaboradoresOnline = function () {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const estatusColaboradesProc = import.meta.env.VITE_APP_API_estatusOperadores;
  const ApiKey = import.meta.env.VITE_APP_APIKEY;
  const [operadoresOn, setOperadoresOn] = React.useState(null);

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

  const colaboradoresLogin =
    operadoresOn?.length > 0 &&
    operadoresOn.filter((colaboradores) => colaboradores.ACCION === "LOGIN");

  const clientesFiltrados = operadoresOn.filter(
    (colaboradores) => colaboradores.NombreCita !== null
  );

  return (
    <>
      <div>
        <Row className="rowTitle">
          <h3 className="title" style={{ textAlign: "center" }}>
            {/* <SlUser style={{ marginRight: "10px" }} />  */}
            Colaborador
          </h3>
        </Row>
        <Row className="colabadoresOnline">
          {
            colaboradoresLogin.length ? 
            (
              colaboradoresLogin?.map((operadoresOn, index) => {
                const name = operadoresOn.NOMBRE;
                const nameDivider = name.split(" ");
                return (
                  <Col
                    xs="auto"
                    key={index}
                    style={{ paddingLeft: "4px", paddingRight: "4px" }}
                  >
                    <ColaboradoresOnline operadoresOn={operadoresOn} nameDivider={nameDivider}/>
                  </Col>
                );
              })
            ) : null
          }
        </Row>
      </div>
    </>
  );
};
