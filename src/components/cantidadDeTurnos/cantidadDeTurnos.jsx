import { Container, Row, Col } from 'react-bootstrap'
import cantidadDeTurnosStyles  from "./cantidadDeTurnos.module.css"


export const CantidadDeTurnos = function() {

    return (   
        <>
            <Container>
                <Row style={{marginTop: "1em", marginBottom: "1em"}}>
                    <Col className= { cantidadDeTurnosStyles.colTitle }> 
                        <h1>Cantidad de turnos y tiempo de espera por área </h1>
                    </Col>
                </Row>
            </Container>

            <Container>
            <Row className= { cantidadDeTurnosStyles.colBody }>

                <Col xl={2} lg={2} md={3} sm={3} xs= {4} className= { cantidadDeTurnosStyles.card }>
                    <Row>
                    <h3 style={{color: "white"}}>Servicio</h3> 
                    </Row>
                    <Container>
                    <Row>
                        <Col className= { cantidadDeTurnosStyles.cardBody } style={{marginRight: "0.4em"}}> 2 T </Col>
                        <Col className= { cantidadDeTurnosStyles.cardBody }> 32 min </Col>
                    </Row>
                    </Container>
                </Col>

                <Col xl={2} lg={2} md={3} sm={3} xs= {4} className= { cantidadDeTurnosStyles.card }>
                    <Row>
                    <h3 style={{color: "white"}}>Servicio</h3> 
                    </Row>
                    <Container>
                    <Row>
                        <Col className= { cantidadDeTurnosStyles.cardBody } style={{marginRight: "0.4em"}}> 2 T </Col>
                        <Col className= { cantidadDeTurnosStyles.cardBody }> 32 min </Col>
                    </Row>
                    </Container>
                </Col>

                <Col xl={2} lg={2} md={3} sm={3} xs= {4} className= { cantidadDeTurnosStyles.card }>
                    <Row>
                    <h3 style={{color: "white"}}>Servicio</h3> 
                    </Row>
                    <Container>
                    <Row>
                        <Col className= { cantidadDeTurnosStyles.cardBody } style={{marginRight: "0.4em"}}> 2 T </Col>
                        <Col className= { cantidadDeTurnosStyles.cardBody }> 32 min </Col>
                    </Row>
                    </Container>
                </Col>

                <Col xl={2} lg={2} md={3} sm={3} xs= {4} className= { cantidadDeTurnosStyles.card }>
                    <Row>
                    <h3 style={{color: "white"}}>Servicio</h3> 
                    </Row>
                    <Container>
                    <Row>
                        <Col className= { cantidadDeTurnosStyles.cardBody } style={{marginRight: "0.4em"}}> 2 T </Col>
                        <Col className= { cantidadDeTurnosStyles.cardBody }> 32 min </Col>
                    </Row>
                    </Container>
                </Col>
            </Row>
            </Container>

        </>
 )

}  