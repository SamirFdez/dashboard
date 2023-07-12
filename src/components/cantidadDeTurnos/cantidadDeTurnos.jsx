import { Container, Row, Col } from 'react-bootstrap'
import cantidadDeTurnosStyles  from "./cantidadDeTurnos.module.css"


export const CantidadDeTurnos = function() {

    return (   
        <>
            <Row style={{marginTop: "2em", marginBottom: "1em", marginLeft: "1em", marginRight: "1em"}}>
                <Col className= { cantidadDeTurnosStyles.colTitle }> 
                    <h1 style={{marginTop: "0.3em", marginBottom: "0.3em"}}>Cantidad de turnos y tiempo de espera por área </h1>
                </Col>
            </Row>

            <Container>
                <Row className= { cantidadDeTurnosStyles.colBody }>
                    <Col lg={2} md={4} sm={4} xs= {4} className= { cantidadDeTurnosStyles.card }>
                        <Row>
                        <h3 style={{color: "white"}}>Servicio</h3> 
                        </Row>
                        <Container>
                        <Row style={{marginBottom:"1em"}}>
                            <Col className= { cantidadDeTurnosStyles.cardBody } style={{marginRight: "0.5em"}}> 2 T </Col>
                            <Col className= { cantidadDeTurnosStyles.cardBody }> 32 min </Col>
                        </Row>
                        </Container>
                    </Col>

                    <Col lg={2} md={4} sm={4} xs= {4} className= { cantidadDeTurnosStyles.card }>
                        <Row>
                        <h3 style={{color: "white"}}>Servicio</h3> 
                        </Row>
                        <Container>
                        <Row>
                            <Col className= { cantidadDeTurnosStyles.cardBody } style={{marginRight: "0.5em"}}> 2 T </Col>
                            <Col className= { cantidadDeTurnosStyles.cardBody }> 32 min </Col>
                        </Row>
                        </Container>
                    </Col>

                    <Col lg={2} md={4} sm={4} xs= {4} className= { cantidadDeTurnosStyles.card }>
                        <Row>
                        <h3 style={{color: "white"}}>Servicio</h3> 
                        </Row>
                        <Container>
                        <Row>
                            <Col className= { cantidadDeTurnosStyles.cardBody } style={{marginRight: "0.5em"}}> 2 T </Col>
                            <Col className= { cantidadDeTurnosStyles.cardBody }> 32 min </Col>
                        </Row>
                        </Container>
                    </Col>

                    <Col lg={2} md={4} sm={4} xs= {4} className= { cantidadDeTurnosStyles.card }>
                        <Row>
                        <h3 style={{color: "white"}}>Servicio</h3> 
                        </Row>
                        <Container>
                        <Row>
                            <Col className= { cantidadDeTurnosStyles.cardBody } style={{marginRight: "0.5em"}}> 2 T </Col>
                            <Col className= { cantidadDeTurnosStyles.cardBody }> 32 min </Col>
                        </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
 )

}  