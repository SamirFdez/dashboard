import { Container, Row, Col } from 'react-bootstrap'
import estatusOperadoresStyles  from "./estatusOperadores.module.css"


export const EstatusOperadores = function() {

    return (   
        <>
            <Row style={{marginTop: "2em", marginBottom: "1em"}}>
                <Col></Col>
                <Col lg={10} md={10} sm={10} xs={10} className= { estatusOperadoresStyles.colTitle }> 
                    <h1>Estatus Operadores </h1>
                </Col>
                <Col></Col>
            </Row>
            
            <Row style={{marginBottom: "1em"}}>
                <Col xl={3} lg={3} md={3} sm={3} xs= {4} className= { estatusOperadoresStyles.card }>
                    <Row>
                    <h3 style={{color: "white"}}>Servicio</h3> 
                    </Row>
                    <Container>
                    <Row>
                        <Col className= { estatusOperadoresStyles.cardBody } style={{marginRight: "0.4em"}}> 2 T </Col>
                        <Col className= { estatusOperadoresStyles.cardBody }> 32 min </Col>
                    </Row>
                    </Container>
                </Col>
            </Row>

        </>
 )
}  