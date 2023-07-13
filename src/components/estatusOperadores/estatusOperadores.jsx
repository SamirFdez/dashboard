import { Container, Row, Col } from 'react-bootstrap'
import estatusOperadoresStyles  from "./estatusOperadores.module.css"
import User from '../../assets/img/person.jpg'
import axios from 'axios'

export const EstatusOperadores = function() {
        

    const baseUrl = 'https://service.laserbluforms.signos-framework.com/GenericWeb?proctoken=SPREPORTEUSUARIOSESTATUSV2';

    const config = {
        headers:{
            'Access-Control-Allow-Origin': 'http://localhost:5173',
            'APIKey': 'AAAAoHa5oyc:APA91bEreCgMCWtdP2oHjsLrdd272TdxLCa0oZGrzBnv1pdj113PFvf_kheHvOhWKg0FO2urWD76wF35jOOq3nIh5urSE9DOgchW7Qx0yCy4evPxKbypb161X-FlFj-rz9es5nKWfQHv'
        }
      };

      axios.get(baseUrl, config)
        .then(res=> console.log(res))
        .catch(err=> console.log(err))

        // fetch(baseUrl , {
        //     method: 'GET',
        // })
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));

    return (   
        <>   
            <Row style={{marginTop: "1em", marginBottom: "1em"}}>
                <Col className= { estatusOperadoresStyles.colTitle }> 
                    <h1 style={{marginTop: "0.3em", marginBottom: "0.3em"}}>Estatus Operadores</h1>
                </Col>
            </Row>

            <Container>
                <Row style={{marginBottom: "1em", justifyContent: "Center"}}>
                    <Col xl={3} lg={4} md={5} sm={10} xs= {10} className= { estatusOperadoresStyles.card }>
                        <Row className= { estatusOperadoresStyles.rowImgName }>
                            <Col xs={5}>
                                <img src={User} alt="" className= { estatusOperadoresStyles.cardImg }/>
                            </Col>
                            <Col xs={7} className= { estatusOperadoresStyles.cardName }> 
                                <h3 style={{marginTop: "1.2em"}}>Juan Perez Sosa</h3>
                                <h4 style={{marginTop: "0.6em"}}>Representate de Servicio</h4>
                            </Col>
                        </Row>
                        <Row className= { estatusOperadoresStyles.rowReporte } style={{marginTop: "1em"}}>
                            <Row style={{marginTop: "0.5em"}}>
                                <Col xs={7}>
                                    <h4> Atendidos</h4>
                                </Col>
                                <Col xs={2}> 
                                    <h4> 40 </h4>
                                </Col>
                            </Row>
                            <Row>
                            <Col xs={7}>
                                    <h4> Finalizados</h4>
                                </Col>
                                <Col xs={2}> 
                                    <h4> 30 </h4>
                                </Col>
                            </Row>
                            <Row>
                            <Col xs={7}>
                                    <h4> Declinados</h4>
                                </Col>
                                <Col xs={2}> 
                                    <h4> 05 </h4>
                                </Col>
                            </Row>
                            <Row>
                            <Col xs={7}>
                                    <h4> Transferidos</h4>
                                </Col>
                                <Col xs={2}>
                                    <h4> 05 </h4>
                                </Col>
                            </Row>
                            <Row style={{marginBottom: "0.5em"}}>
                                <Col xs={7}>
                                    <h4> En espera</h4>
                                </Col>
                                <Col xs={2}> 
                                    <h4> 30 </h4>
                                    </Col>
                            </Row>
                        </Row>
                        <Row className= { estatusOperadoresStyles.rowTimeOnline } style={{marginTop: "1em"}}>
                            <Row style={{marginTop: "0.5em"}}>
                                <Col xs={7}>
                                    <h4> Tiempo Online:</h4>
                                </Col>
                                <Col xs={2}> 
                                    <h4> 05h:10m </h4>
                                </Col>
                            </Row>
                        </Row>
                        <Row className= { estatusOperadoresStyles.rowTimeOffline } style={{marginTop: "1em"}}>
                            <Row style={{marginTop: "0.5em"}}>
                                <Col xs={7}>
                                    <h4> Tiempo Offline:</h4>
                                </Col>
                                <Col xs={2}> 
                                    <h4> 00h:23m </h4>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>

                
            </Container>
        </>
 )
}  