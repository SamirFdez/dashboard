import { Row, Col } from 'react-bootstrap'
import footerStyles  from "./footer.module.css"


export const Footer = function() {

    return (   
        <>
            <Row className={ footerStyles.row} style={{ marginTop: "1000px"}}>
                <Col className= { footerStyles.col }> 
                    Copyright © 2023 Signos Framework. All rights reserved.
                </Col>
            </Row>
        </>
 )

}  