import { Container, Row, Col } from 'react-bootstrap'
import estatusEstacionesStyles  from "./estatusEstaciones.module.css"


export const EstatusEstaciones = function() {

    return (   
        <>
            <Row style={{marginBottom: "1em"}}>
                <Col className= { estatusEstacionesStyles.colTitle }> 
                    <h1 style={{marginTop: "0.3em", marginBottom: "0.3em"}}>Estatus estaciones </h1>
                </Col>
            </Row>

            <Container>
                <Row className= { estatusEstacionesStyles.colBody }>
                    <Col xl={2} lg={3} md={4} sm={5} xs= {5} className= { estatusEstacionesStyles.card }>
                        <Row>
                        <h3 style={{color: "white"}}>Servicio</h3> 
                        </Row>
                        <Container>
                        <Row>
                        <Col className= { estatusEstacionesStyles.cardBody } style={{marginRight: "0.5em"}}> Onl. 40 </Col>
                            <Col className= { estatusEstacionesStyles.cardBody }> Disp. 40 </Col>
                        </Row>
                        </Container>
                    </Col>

                    <Col xl={2} lg={3} md={4} sm={5} xs= {5} className= { estatusEstacionesStyles.card }>
                        <Row>
                        <h3 style={{color: "white"}}>Servicio</h3> 
                        </Row>
                        <Container>
                        <Row>
                            <Col className= { estatusEstacionesStyles.cardBody } style={{marginRight: "0.5em"}}> Onl. 40 </Col>
                            <Col className= { estatusEstacionesStyles.cardBody }> Disp. 40 </Col>
                        </Row>
                        </Container>
                    </Col>

                    <Col xl={2} lg={3} md={4} sm={5} xs= {5} className= { estatusEstacionesStyles.card }>
                        <Row>
                        <h3 style={{color: "white"}}>Servicio</h3> 
                        </Row>
                        <Container>
                        <Row>
                            <Col className= { estatusEstacionesStyles.cardBody } style={{marginRight: "0.5em"}}> Onl. 40 </Col>
                            <Col className= { estatusEstacionesStyles.cardBody }> Disp. 40 </Col>
                        </Row>
                        </Container>
                    </Col>

                    <Col xl={2} lg={3} md={4} sm={5} xs= {5} className= { estatusEstacionesStyles.card }>
                        <Row>
                        <h3 style={{color: "white"}}>Servicio</h3> 
                        </Row>
                        <Container>
                        <Row>
                            <Col className= { estatusEstacionesStyles.cardBody } style={{marginRight: "0.5em"}}> Onl. 40 </Col>
                            <Col className= { estatusEstacionesStyles.cardBody }> Disp. 40 </Col>
                        </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
 )

}  