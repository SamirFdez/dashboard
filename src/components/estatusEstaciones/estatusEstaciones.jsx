import { Container, Row, Col } from 'react-bootstrap'
import estatusEstacionesStyles  from "./estatusEstaciones.module.css"


export const EstatusEstaciones = function() {

    return (   
        <>
            <Row style={{marginTop: "2em", marginBottom: "1em"}}>
                <Col></Col>
                <Col lg={10} md={10} sm={10} xs={10} className= { estatusEstacionesStyles.colTitle }> 
                    <h1>Estatus estaciones </h1>
                </Col>
                <Col></Col>
            </Row>

            <Container>
            <Row className= { estatusEstacionesStyles.colBody }>

                <Col xl={2} lg={2} md={4} sm={4} xs= {4} className= { estatusEstacionesStyles.card }>
                    <Row>
                    <h3 style={{color: "white"}}>Servicio</h3> 
                    </Row>
                    <Container>
                    <Row>
                        <Col className= { estatusEstacionesStyles.cardBody } style={{marginRight: "0.4em"}}> Onl. 40 </Col>
                        <Col className= { estatusEstacionesStyles.cardBody }> Disp. 40 </Col>
                    </Row>
                    </Container>
                </Col>

                <Col xl={2} lg={2} md={4} sm={4} xs= {4} className= { estatusEstacionesStyles.card }>
                    <Row>
                    <h3 style={{color: "white"}}>Servicio</h3> 
                    </Row>
                    <Container>
                    <Row>
                        <Col className= { estatusEstacionesStyles.cardBody } style={{marginRight: "0.4em"}}> Onl. 40 </Col>
                        <Col className= { estatusEstacionesStyles.cardBody }> Disp. 40 </Col>
                    </Row>
                    </Container>
                </Col>

                <Col xl={2} lg={2} md={4} sm={4} xs= {4} className= { estatusEstacionesStyles.card }>
                    <Row>
                    <h3 style={{color: "white"}}>Servicio</h3> 
                    </Row>
                    <Container>
                    <Row>
                        <Col className= { estatusEstacionesStyles.cardBody } style={{marginRight: "0.4em"}}> Onl. 40 </Col>
                        <Col className= { estatusEstacionesStyles.cardBody }> Disp. 40 </Col>
                    </Row>
                    </Container>
                </Col>

                <Col xl={2} lg={2} md={4} sm={4} xs= {4} className= { estatusEstacionesStyles.card }>
                    <Row>
                    <h3 style={{color: "white"}}>Servicio</h3> 
                    </Row>
                    <Container>
                    <Row>
                        <Col className= { estatusEstacionesStyles.cardBody } style={{marginRight: "0.4em"}}> Onl. 40 </Col>
                        <Col className= { estatusEstacionesStyles.cardBody }> Disp. 40 </Col>
                    </Row>
                    </Container>
                </Col>
            </Row>
            </Container>

        </>
 )

}  