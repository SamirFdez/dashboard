import { Row, Col } from 'react-bootstrap'
import estatusColaboradoresStyles  from "./estatusColaboradores.module.css"


export const EstatusColaboradores = function() {

    return (   
        <>
            <Row style={{marginTop: "2em", marginBottom: "1em"}}>
                <Col></Col>
                <Col lg={10} md={10} sm={10} xs={10} className= { estatusColaboradoresStyles.colTitle }> 
                    <h1>Estatus colaboradoes </h1>
                </Col>
                <Col></Col>
            </Row>
            
            <Row style={{marginBottom: "1em"}}>
                <Col></Col>
                <Col lg={8} md={8} sm={8} xs={8} className= { estatusColaboradoresStyles.colSubTitle } style={{ marginRight: "0.5em"}}>
                    <h4>15 colaboradores Online, 8 disponibles</h4>
                </Col>
                    
                <Col lg={2} md={2} sm={2} xs={2} className= { estatusColaboradoresStyles.colSubTitle }>
                    <h4>3 Offline</h4>
                </Col>
                <Col></Col>
            </Row>

        </>
 )
}  