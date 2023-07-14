import { Container, Row, Col } from 'react-bootstrap'
import estatusOperadoresStyles  from "./estatusOperadores.module.css"
import axios from 'axios'
import React from 'react'

export const EstatusOperadores = function() {
        

    const baseUrl = 'https://service.laserbluforms.signos-framework.com/GenericWeb?proctoken=SPREPORTEUSUARIOSESTATUSV2';

    const [operadores, setOperadores] = React.useState(null);

    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': 'AAAAoHa5oyc:APA91bEreCgMCWtdP2oHjsLrdd272TdxLCa0oZGrzBnv1pdj113PFvf_kheHvOhWKg0FO2urWD76wF35jOOq3nIh5urSE9DOgchW7Qx0yCy4evPxKbypb161X-FlFj-rz9es5nKWfQHv'
        }
      };

      React.useEffect(() => {
        axios.get(baseUrl, config).then((response) => {
            setOperadores(response.data);
        });
      }, []);
    
    
      if (!operadores) {
        return null
    };

    setTimeout(() => {
        window.location.reload();
      }, 90000);


    return (   
        <>   
            <Row style={{marginTop: "1em", marginBottom: "1em"}}>
                <Col className= { estatusOperadoresStyles.colTitle }> 
                    <h1 style={{marginTop: "0.3em", marginBottom: "0.3em"}}>Estatus Operadores</h1>
                </Col>
            </Row>

                    <Container>
                        <Row style={{marginBottom: "1em", justifyContent: "Center"}}>
                            
                            {operadores.map(operador => (
                                <Col xl={3} lg={4} md={5} sm={10} xs= {10} className= { estatusOperadoresStyles.card }>
                                    <Row className= { estatusOperadoresStyles.rowImgName }>
                                        <Col xs={5}>
                                            <img src={operadores.Foto} alt="Imagen operador" className= { estatusOperadoresStyles.cardImg }/>
                                        </Col>
                                        <Col xs={7} className= { estatusOperadoresStyles.cardName }> 
                                            <h3 style={{marginTop: "1.2em"}}> {operador.NOMBRE} </h3>
                                            <h4 style={{marginTop: "0.6em"}}> {operador.DESCRIPCION} </h4>
                                        </Col>
                                    </Row>
                                    <Row className= { estatusOperadoresStyles.rowReporte } style={{marginTop: "1em"}}>
                                        <Row style={{marginTop: "0.5em"}}>
                                            <Col xs={7}>
                                                <h4> Atendidos</h4>
                                            </Col>
                                            <Col xs={2}> 
                                                <h4> {operador.ATENDIDOS} </h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                        <Col xs={7}>
                                                <h4> Finalizados</h4>
                                            </Col>
                                            <Col xs={2}> 
                                                <h4> {operador.FINALIZADO} </h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                        <Col xs={7}>
                                                <h4> Declinados</h4>
                                            </Col>
                                            <Col xs={2}> 
                                                <h4> {operador.DECLINADOS} </h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                        <Col xs={7}>
                                                <h4> Transferidos</h4>
                                            </Col>
                                            <Col xs={2}>
                                                <h4> {operador.TRANSFERIDOS} </h4>
                                            </Col>
                                        </Row>
                                        <Row style={{marginBottom: "0.5em"}}>
                                            <Col xs={7}>
                                                <h4> En espera</h4>
                                            </Col>
                                            <Col xs={2}> 
                                                <h4> {operador.ESPERA} </h4>
                                                </Col>
                                        </Row>
                                    </Row>
                                    <Row className= { estatusOperadoresStyles.rowTimeOnline } style={{marginTop: "1em"}}>
                                        <Row style={{marginTop: "0.5em"}}>
                                            <Col xs={7}>
                                                <h4> Tiempo Online:</h4>
                                            </Col>
                                            <Col xs={2}> 
                                                <h4> {operador.TIEMPOLOGUSUARIO} </h4>
                                            </Col>
                                        </Row>
                                    </Row>
                                    {/* <Row className= { estatusOperadoresStyles.rowTimeOffline } style={{marginTop: "1em"}}>
                                        <Row style={{marginTop: "0.5em"}}>
                                            <Col xs={7}>
                                                <h4> Tiempo Offline:</h4>
                                            </Col>
                                            <Col xs={2}> 
                                                <h4> 00:00:00 </h4>
                                            </Col>
                                        </Row>
                                    </Row> */}
                                </Col>
                            ))}
                            </Row> 
                    </Container>

        </>
 )
}  