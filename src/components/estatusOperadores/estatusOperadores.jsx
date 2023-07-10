import { Row, Col } from 'react-bootstrap'
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
                <Col></Col>
                <Col lg={10} md={10} sm={10} xs={10} className= { estatusOperadoresStyles.colSubTitle } style={{ marginRight: "0.5em"}}>
                </Col>
                <Col></Col>
            </Row>

        </>
 )
}  