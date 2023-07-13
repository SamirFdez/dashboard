import { Container, Row, Col } from 'react-bootstrap'
import estatusColaboradoresStyles  from "./estatusColaboradores.module.css"
import User from '../../assets/img/person.jpg'

export const EstatusColaboradores = function() {

    return (   
        <>
            <Row>
                <Col xs={12} className= { estatusColaboradoresStyles.colTitle }> 
                    <h1 style={{marginTop: "0.3em", marginBottom: "0.3em"}}>Estatus colaboradoes </h1>
                </Col>
            </Row>  

            <Row>
                <Col xl={8} lg={12}>
                    <Col className= { estatusColaboradoresStyles.colSubTitle } >
                        <h3>15 colaboradores Online, 8 disponibles</h3>
                    </Col>
                    
                        <Row style={{textAlign: "Center", justifyContent: "center"}}>
                            <Col xxl={4} xl={4} lg={4} md={5} sm={8} xs= {12} className= { estatusColaboradoresStyles.card } style={{marginRight: "1.5em"}}>
                                <Row className= { estatusColaboradoresStyles.rowImgName }>
                                    <Col xs={4}>
                                        <img src={User} alt="" className= { estatusColaboradoresStyles.cardImg }/>
                                    </Col>
                                    <Col xs={8} className= { estatusColaboradoresStyles.cardName }> 
                                        <h3 style={{marginTop: "1.2em"}}>Juan Perez Sosa</h3>
                                        <h4 style={{marginTop: "0.6em"}}>Representate de Servicio</h4>
                                    </Col>
                                </Row>
                                <Row className= { estatusColaboradoresStyles.rowInfo } style={{marginTop: "1em"}}>
                                    <Col className= { estatusColaboradoresStyles.rowEstacion } style={{marginRight: "1em"}}>
                                        <h1 style={{marginTop: "0.2em"}}>27</h1>
                                        <h2>Estación de Caja</h2>
                                    </Col>
                                    <Col className= { estatusColaboradoresStyles.rowEstacion } >      
                                        <h4 style={{marginTop: "0.5em"}}> Atendiendo </h4>
                                        <h1>I057</h1>
                                        <h4> 20h:05m </h4>
                                    </Col>
                                </Row>
                                <Row className= { estatusColaboradoresStyles.rowPausa } style={{marginTop: "1em"}}>
                                    <Row >
                                        <Col xs={7}>
                                            <h4> En pausa:</h4>
                                        </Col>
                                        <Col xs={2} style={{color: "red"}}> 
                                            <h4> 00h:50m </h4>
                                        </Col>
                                    </Row>
                                </Row>
                                <Row className= { estatusColaboradoresStyles.rowCliente } style={{marginTop: "1em"}}>
                                    <Row>
                                        <Col>
                                            <h4> Juan Carlos de los Santos Nunez</h4>
                                            <h4> R. DSB 0725</h4>
                                        </Col>
                                    </Row>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col xl={3} lg={12}>
                        <Col className= { estatusColaboradoresStyles.colSubTitle }>
                            <h3>3 Offline</h3>
                        </Col>
                        <Row style={{textAlign: "Center", justifyContent: "center"}}>
                            <Col xl={12} lg={12} className= { estatusColaboradoresStyles.Offlinecard }>
                                <Row className= { estatusColaboradoresStyles.rowOfflineImgName }>
                                    <Col xs={5} className={estatusColaboradoresStyles.offlineCardImg}>
                                        <img src={User} alt="" className= { estatusColaboradoresStyles.offlineImg }/>
                                    </Col>
                                    <Col xs={7} className= { estatusColaboradoresStyles.OfflinecardName }> 
                                        <h4 style={{marginTop: "1.2em"}}>Juan Perez Sosa</h4>
                                        <h5 style={{marginTop: "0.6em"}}>Representate de Servicio</h5>
                                        <h3>01:53:00</h3>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className= { estatusColaboradoresStyles.Offlinecard }>
                                <Row className= { estatusColaboradoresStyles.rowOfflineImgName }>
                                    <Col xs={5} className={estatusColaboradoresStyles.offlineCardImg}>
                                        <img src={User} alt="" className= { estatusColaboradoresStyles.offlineImg }/>
                                    </Col>
                                    <Col xs={7} className= { estatusColaboradoresStyles.OfflinecardName }> 
                                        <h3 style={{marginTop: "1.2em"}}>Juan Perez Sosa</h3>
                                        <h4 style={{marginTop: "0.6em"}}>Representate de Servicio</h4>
                                        <h3>01:53:00</h3>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Col>   
                </Row>

            
        </>
 )
}  

