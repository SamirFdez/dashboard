import { Row, Col } from 'react-bootstrap'
import headerStyles  from "./header.module.css"


export const Header = function() {

    return (   
        <>
            <Row className={ headerStyles.row}>
                <Col className= { headerStyles.col }> 
                    ESTATUS GESTIÓN DE COLA
                </Col>
            </Row>
        </>
 )
}  