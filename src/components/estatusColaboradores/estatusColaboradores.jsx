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
        <Row className="rowTitle">
          <h3 className="title" style={{ textAlign: "center" }}>
            {/* <SlUser style={{ marginRight: "10px" }} />  */}
            Colaborador
          </h3>
        </Row>
        <Row className="colabadoresOnline">
          {operadoresOn?.length &&
            operadoresOn
              .filter((colaboradores) => colaboradores.ACCION === "LOGIN")
              .map((operadoresOn, index) => {
                const name = operadoresOn.NOMBRE;
                const nameDivider = name.split(" ");
                return (
                  <Col
                    xs="auto"
                    key={index}
                    style={{ paddingLeft: "4px", paddingRight: "4px" }}
                  >
                    <Card
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
                      <div className="d-flex rowImgName">
                        <div className="col-5">
                          <img
                            src={`data:image/jpeg;base64,${operadoresOn.Foto}`}
                            className="cardImg"
                          />
                        </div>
                        {nameDivider.length === 1 ? (
                          <div className="cardName">
                            <h5> </h5>
                            <h5> {operadoresOn.NOMBRE} </h5>
                            <h6> {operadoresOn.DESCRIPCION} </h6>
                          </div>
                        ) : nameDivider.length === 2 ? (
                          <div className="col-7 cardName">
                            <h5 style={{ marginBottom: "0px" }}>
                              {nameDivider[0]}
                            </h5>
                            <h5> {nameDivider[1]} </h5>
                            <h6> {operadoresOn.DESCRIPCION} </h6>
                          </div>
                        ) : nameDivider.length === 4 ? (
                          <div className="col-7 cardName">
                            <h5 style={{ marginBottom: "0px" }}>
                              {nameDivider[0]}
                            </h5>
                            <h5> {nameDivider[2]} </h5>
                            <h6> {operadoresOn.DESCRIPCION} </h6>
                          </div>
                        ) : (
                          <div className="cardName">
                            <h5> {operadoresOn.NOMBRE} </h5>
                            <h6> {operadoresOn.DESCRIPCION} </h6>
                          </div>
                        )}
                      </div>
                      <div className="d-flex justify-content-between rowEstacionTurno">
                        <div className="estacion">
                          <h5> {operadoresOn.NumeroEstacion} </h5>
                          <h6>
                            {" "}
                            Estación de {operadoresOn.DescripcionPantalla}{" "}
                          </h6>
                        </div>
                        <div className="turno">
                          <h5>Turno:</h5>
                          <h6>{operadoresOn.TURNO}</h6>
                          {operadoresOn.TIEMPO !== "--:--:--" ? (
                            <TiempoTurno operadoresOn={operadoresOn.TIEMPO} />
                          ) : (
                            <h6> --:--:-- </h6>
                          )}
                        </div>
                      </div>
                      <div className="d-flex rowEstatus">

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

// <Col
//   md={3}
//   sm={5}
//   xs={11}
//   key={index}
// className={
//   operadoresOn.error === 1
//     ? "cardYellow"
//     : operadoresOn.error === 2
//     ? "cardRed"
//     : operadoresOn.error === 3
//     ? "cardGreen"
//     : "cardGray"
// }
// >
//   <Row className="rowImgName" style={{paddingBottom: "0"}}>
//     <Col xs={5} style={{padding: "8px 8px"}}>
//       <img
//         src={`data:image/jpeg;base64,${operadoresOn.Foto}`}
//         className="cardImg"
//       />
//     </Col>

//     <Col xs={7} className="cardName">
//       <h6 style={{ marginTop: "1em", fontSize: "15px" }}>
//         {operadoresOn.NOMBRE}
//       </h6>
//       <h6 style={{ marginTop: "0.2em", fontSize: "13px" }}>
//         {operadoresOn.DESCRIPCION}
//       </h6>
//     </Col>
//   </Row>

//   <Row className="rowInfo" style={{ marginTop: "0.7em" }}>
//     <Col
//       className="rowEstacion"
//       style={{ marginRight: "0.7em" }}
//     >
//       <h6 style={{ marginTop: "0.2em", fontSize: "20px" }}>
//         {operadoresOn.NumeroEstacion}
//       </h6>
//       <h6 style={{ fontSize: "18px" }}>
//         Estación de {operadoresOn.DescripcionPantalla}
//       </h6>
//     </Col>

//     <Col className="rowEstacion">
//       <h6 style={{ marginTop: "0.5em", fontSize: "18px" }}>
//         Turno:
//       </h6>
//       <h6 style={{ fontSize: "18px" }}>
//         {" "}
//         {operadoresOn.TURNO}{" "}
//       </h6>
//       {operadoresOn.TIEMPO !== "--:--:--" ? (
//         <TiempoTurno operadoresOn={operadoresOn.TIEMPO} />
//       ) : (
//         <h6 style={{ fontSize: "18px" }}> --:--:-- </h6>
//       )}
//     </Col>
//   </Row>

//   <Row className="rowPausa" style={{ marginTop: "0.7em" }}>

//         <h6 style={{ fontSize: "16px", margin: "0px" }}>
//           {operadoresOn.MENSAJE}
//         </h6>
//   </Row>

//   <Row className="rowCliente" style={{ marginTop: "0.7em" }}>
//       <Col>
//         {operadoresOn.NombreCita !== null ? (
//           <h6 style={{ fontSize: "16px" }}>
//             {operadoresOn.NombreCita}
//           </h6>
//         ) : null}
//         {/* <h6 style={{fontSize: "16px"}}> {operadoresOn.NumeroCita} </h6> */}
//       </Col>
//   </Row>
// </Col>
