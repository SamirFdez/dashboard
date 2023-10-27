import React, { useEffect } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { TiempoLogOut } from "./tiempoLogOut";

export const ColaboradoresOffline = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const estatusColaboradesProc = import.meta.env.VITE_APP_API_estatusOperadores;
  const ApiKey = import.meta.env.VITE_APP_APIKEY;
  const [operadoresOff, setOperadoresOff] = React.useState(null);

  const config = {
    headers: {
      "Content-Type": "application/json",
      APIKey: ApiKey,
    },
  };

  const getOperadoresOff = async () => {
    const response = await axios.get(baseUrl + estatusColaboradesProc, config);
    setOperadoresOff(response.data);
  };

  useEffect(() => {
    getOperadoresOff();
  }, []);

  if (!operadoresOff) {
    return null;
  }

  const colaboradoresLogOut =
    operadoresOff?.length > 0 &&
    operadoresOff.filter((colaboradores) => colaboradores.ACCION === "LOGOUT");

  return (
    <>
      <div>
        <Row className="rowTitle">
          <h3 className="title" style={{ textAlign: "center" }}>
            Offline
          </h3>
        </Row>

        <Row className="colaboradoresOffline">
          {colaboradoresLogOut.map((operadoresOff, index) => {
            const name = operadoresOff.NOMBRE;
            const nameDivider = name.split(" ");
            return (
              <Col lg={12} md={4} sm={6} xs={12} key={index}>
                <Card className="cardGray">
                  <div className="d-flex rowImgNameOff">
                    <div className="col-5" style={{textAlign: "center"}}>
                      <img
                        src={`data:image/jpeg;base64,${operadoresOff.Foto}`}
                        className={
                          operadoresOff.error === 1
                            ? "cardImgOff error"
                            : "cardImgOff normal"
                        }
                      />
                    </div>

                    <div className="col-7 cardNameOff">
                      {nameDivider.length === 1 ? (
                        <h5> {nameDivider[0]} </h5>
                      ) : nameDivider.length === 2 ? (
                        <h5> {`${nameDivider[0]} ${nameDivider[1]}`} </h5>
                      ) : nameDivider.length === 3 ? (
                        <h5>
                          {`${nameDivider[0]} ${nameDivider[1]} ${nameDivider[2]}`}
                        </h5>
                      ) : (
                        <h5>
                          {`${nameDivider[0]} ${nameDivider[1]} ${nameDivider[2]}`}
                        </h5>
                      )}
                      <h6> {operadoresOff.MOTIVO} </h6>
                      <TiempoLogOut operadoresOff={operadoresOff.TIEMPOLOGUSUARIO}/>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};
