import { Row, Col } from 'react-bootstrap'
import estatusColaboradoresStyles  from "./estatusColaboradores.module.css"
import React from 'react'
import axios from 'axios'

export const EstatusColaboradores = function() {

    const baseUrl = import.meta.env.VITE_APP_API_estatusColaboradores;

    const baseUrlOffline = import.meta.env.VITE_APP_API_estatusOperadores;

    const ApiKey = import.meta.env.VITE_APP_APIKEY;

    const [colaboradores, setColaboradores] = React.useState(null);

    const [operadoresOff, setOperadoresOff] = React.useState(null);

    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': ApiKey
        }
      };

      React.useEffect(() => {
        axios.get(baseUrl, config).then((response) => {
            setColaboradores(response.data);
        });

        axios.get(baseUrlOffline, config).then((response) => {
            setOperadoresOff(response.data);
          });
      }, []);
    
        if (!colaboradores) {
            return null
        };                  
          
    return (   
        <>
            <Row>
                <Col xl={12} xs={12} className= { estatusColaboradoresStyles.colTitle }> 
                    <h1 style={{marginTop: "0.3em", marginBottom: "0.3em"}}>Estatus colaboradoes </h1>
                </Col>
            </Row>  

            <Row>
                <Col xxl={9} xl={9} lg={12}>
                    <Col className= { estatusColaboradoresStyles.colSubTitle } >
                        <h3>Colaboradores Online</h3>
                    </Col>
                    
                        <Row style={{textAlign: "Center", justifyContent: "center"}}>

                            {colaboradores.map(colaborador => ( 

                            <Col xxl={2} xl={4} lg={4} md={5} sm={5} xs= {11} 
                                    className = { 
                                        colaborador.TiempoGlobal > "00:00:00" && colaborador.TiempoGlobal < "00:09:00" ? estatusColaboradoresStyles.cardGreen
                                        : colaborador.TiempoGlobal >= "00:10:00" && colaborador.TiempoGlobal <= "00:19:00" ? estatusColaboradoresStyles.cardYellow
                                        : colaborador.TiempoGlobal >= "00:20:00" ? estatusColaboradoresStyles.cardRed
                                        : estatusColaboradoresStyles.card 
                                    }>
   
                            {/* <Col xxl={3} xl={4} lg={4} md={5} sm={5} xs= {11} 
                                    className = { 
                                        colaborador.ERROR === 1 ? estatusColaboradoresStyles.cardYellow
                                        : colaborador.ERROR === 2 ? estatusColaboradoresStyles.cardRed
                                        : colaborador.ERROR === 3 ? estatusColaboradoresStyles.cardGreen
                                        : estatusColaboradoresStyles.card 
                                    }> */}


                                <Row className= { estatusColaboradoresStyles.rowImgName }>
                                    <Col xs={4}>
                                        <img src={`data:image/jpeg;base64,${colaborador.Foto}`} alt="" className= { estatusColaboradoresStyles.cardImg }/>
                                    </Col>
                                    <Col xs={8} className= { estatusColaboradoresStyles.cardName }> 
                                        <h3 style={{marginTop: "1em"}}> {colaborador.NombreEmpleado} </h3>
                                        <h4 style={{marginTop: "0.2em"}}> {colaborador.GrupoEstacion} </h4>
                                    </Col>
                                </Row>
                                <Row className= { estatusColaboradoresStyles.rowInfo } style={{marginTop: "1em"}}>
                                    <Col className= { estatusColaboradoresStyles.rowEstacion } style={{marginRight: "1em"}}>
                                        <h1 style={{marginTop: "0.2em"}}> {colaborador.NumeroEstacion} </h1>
                                        <h2>Estación de {colaborador.GrupoEstacion}</h2>
                                    </Col>
                                    <Col className= { estatusColaboradoresStyles.rowEstacion } >      
                                        <h4 style={{marginTop: "0.5em"}}> Atendiendo: </h4>
                                        <h1> {colaborador.Turno} </h1>

                                        <h4> {colaborador.TiempoGlobal} </h4>

                                    </Col>
                                </Row>
                                <Row className= { estatusColaboradoresStyles.rowPausa } style={{marginTop: "1em"}}>
                                    <Row >
                                        <Col xs={6}>
                                            <h4> {colaborador.EstatusTurno}</h4>
                                        </Col>
                                        <Col xs={4}> 
                                            <h4> {colaborador.TiempoUltimoEstatus} </h4>
                                        </Col>
                                    </Row>
                                </Row>
                                <Row className= { estatusColaboradoresStyles.rowCliente } style={{marginTop: "1em"}}>
                                    <Row>
                                        <Col>
                                            <h4> {colaborador.NombreCita} </h4>
                                            <h4> {colaborador.NumeroCita} </h4>
                                        </Col>
                                    </Row>
                                </Row>
                            </Col>

                            ))}
                            
                        </Row>
                    </Col>

                    <Col xxl={3} xl={3} lg={12}>
                        <Col className= { estatusColaboradoresStyles.colSubTitle }>
                            <h3>Offline</h3>
                        </Col>
                        <Col style={{textAlign: "Center", justifyContent: "center"}}>

                            {operadoresOff?.length > 0 && operadoresOff.filter(operadorOff => operadorOff.ACCION === "LOGOUT").map(operadorOff =>

                            <Col xl={12} lg={12} className= { estatusColaboradoresStyles.Offlinecard }>
                                <Row className= { estatusColaboradoresStyles.rowOfflineImgName }>
                                    <Col xs={5} className={estatusColaboradoresStyles.offlineCardImg}>
                                        <img src={`data:image/jpeg;base64,${operadorOff.Foto}`} alt="" className= { estatusColaboradoresStyles.offlineImg }/>
                                    </Col>
                                    <Col xs={7} className= { estatusColaboradoresStyles.OfflinecardName }> 
                                        <h4 style={{marginTop: "1.2em"}}> {operadorOff.NOMBRE} </h4>
                                        <h5 style={{marginTop: "0.6em"}}> {operadorOff.MOTIVO} </h5>
                                        <h3> {operadorOff.TIEMPOLOGUSUARIO} </h3>
                                    </Col>
                                </Row>
                            </Col>

                            )}

                        </Col>
                    </Col>   
                </Row>

            
        </>
 )
}  

