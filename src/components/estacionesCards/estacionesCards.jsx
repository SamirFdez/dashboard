import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import EstacionesCardsStyles from "./estacionesCards.module.css";
import { TiempoNotificado } from "./tiempoNotificado";
import { TiempoGlobal } from "./tiempoGlobal";
import { TiempoUltimoEstatus } from "./tiempoUltimoEstatus";

export const EstacionsCards = function () {
  const baseUrl = import.meta.env.VITE_APP_BASEURL
  const estatusColaboradesProc = import.meta.env.VITE_APP_API_estatusColaboradores;
  const ApiKey = import.meta.env.VITE_APP_APIKEY;
  const [colaboradores, setColaboradores] = useState(null);

  const config = {
      headers:{
          "Content-Type": "application/json",
          'APIKey': ApiKey
      }
    };

    const getEstacionesCards = async () =>{

      try {
          const response = await axios.get(baseUrl+estatusColaboradesProc, config);
          setColaboradores(response.data);
          
      } catch (error) {
          console.error('Error al obtener el nuevo valor del contador:', error);
      }

    }

    useEffect(() => {
      getEstacionesCards();

   }, []);

      if (!colaboradores) {
          return null
      };  

      const clientesFiltrados = colaboradores?.filter(
        (colaboradores) => colaboradores.NombreCita !== null
      );



  return (
    <>
      <div>
        <Row className="rowTitle" style={{margin: "0.5em"}}>
          <h3 className="title" style={{ textAlign: "center" }}>
            Estatus estaciones
          </h3>
        </Row>
        <Row className="colabadoresOnline">
          {colaboradores?.map((operadoresOn, index) => {
            const name = operadoresOn.NombreEmpleado;
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
                        <h5> {operadoresOn.NombreEmpleado} </h5>
                        <h6> {operadoresOn.GrupoEstacion} </h6>
                      </div>
                    ) : nameDivider.length === 2 ? (
                      <div className="col-7 cardName">
                        <h5 style={{ marginBottom: "0px" }}>
                          {nameDivider[0]}
                        </h5>
                        <h5> {nameDivider[1]} </h5>
                        <h6> {operadoresOn.GrupoEstacion} </h6>
                      </div>
                    ) : (
                      <div className="cardName">
                        <h5> {operadoresOn.NombreEmpleado} </h5>
                        <h6> {operadoresOn.GrupoEstacion} </h6>
                      </div>
                    )}
                  </div>
                  <div className="d-flex justify-content-between rowEstacionTurno">
                    <div className="estacion">
                      <h5> {operadoresOn.NumeroEstacion} </h5>
                      <h6>Estación de {operadoresOn.DescripcionPantalla}</h6>
                    </div>
                    <div className="turno">
                      <h5>Turno:</h5>
                      <h6>{operadoresOn.Turno}</h6>
                      {operadoresOn.TIEMPO !== "--:--:--" ? (
                        <TiempoUltimoEstatus colaborador={operadoresOn.TiempoUltimoEstatus} />
                      ) : (
                        <h6> --:--:-- </h6>
                      )}
                    </div>
                  </div>
                  <div className="d-flex rowEstatus justify-content-center align-items-center">
                    <h6>{operadoresOn.MENSAJE}</h6>
                  </div>

                  {clientesFiltrados.length ? (
                    <>
                      {operadoresOn.NombreCita !== null ? (
                        <div className="d-flex rowPaciente justify-content-center align-items-center">
                          <h6>{operadoresOn.NombreCita}</h6>
                        </div>
                      ) : (
                        <div className="d-flex rowPacienteNull justify-content-center align-items-center">
                          <h6>{operadoresOn.NombreCita}</h6>
                        </div>
                      )}
                    </>
                  ) : null}
                </Card>
              </Col>
            );
          })}
        </Row>

      </div>
    </>
  );
};
