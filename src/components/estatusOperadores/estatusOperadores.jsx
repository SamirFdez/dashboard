import { Container, Row, Col } from 'react-bootstrap'
import estatusOperadoresStyles  from "./estatusOperadores.module.css"
import User from '../../assets/img/person.jpg'


export const EstatusOperadores = function() {

    return (   
        <>
            <Row style={{marginTop: "2em", marginBottom: "1.5em"}}>
                <Col></Col>
                <Col lg={10} md={10} sm={10} xs={10} className= { estatusOperadoresStyles.colTitle }> 
                    <h1>Estatus Operadores </h1>
                </Col>
                <Col></Col>
            </Row>
            
            <Container>
                {/* CARD */}
                <Row style={{marginBottom: "1em", justifyContent: "Center"}}>
                    <Col xl={3} lg={4} md={5} sm={6} xs= {9} className= { estatusOperadoresStyles.card }>
                        <Row className= { estatusOperadoresStyles.rowImgName }>
                            <Col xs={5}>
                                <img src={User} alt="" className= { estatusOperadoresStyles.cardImg }/>
                            </Col>
                            <Col xs={7} className= { estatusOperadoresStyles.cardName }> 
                                <h3 style={{marginTop: "1.2em"}}>Juan Perez Sosa</h3>
                                <h5 style={{marginTop: "0.6em"}}>Representate de Servicio</h5>
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