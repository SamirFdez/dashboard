import { Container, Row, Col } from 'react-bootstrap'
import cantidadDeTurnosStyles  from "./cantidadDeTurnos.module.css"


export const CantidadDeTurnos = function() {

    return (   
        <>
            <Row className={ cantidadDeTurnosStyles.row} style={{marginTop: "2em", marginBottom: "1em"}}>
                <Col></Col>
                <Col xs={10} className= { cantidadDeTurnosStyles.colTitle }> 
                    Cantidad de turnos y tiempo de espera por área
                </Col>
                <Col></Col>
            </Row>

            <Container>
            <Row className={ cantidadDeTurnosStyles.colBody}>
                <Col>
                    <div className= { cantidadDeTurnosStyles.card }>
                        <span className= { cantidadDeTurnosStyles.divTitle }> Sevicio </span>
                    </div>
                </Col>

                <Col>
                    <div className= { cantidadDeTurnosStyles.card }>
                        <span className= { cantidadDeTurnosStyles.divTitle }> Sevicio </span>

                    </div>
                </Col>

                <Col>
                    <div className= { cantidadDeTurnosStyles.card }>
                        <span className= { cantidadDeTurnosStyles.divTitle }> Sevicio </span>
                    </div>
                </Col>

                
                
            </Row>
            </Container>

        </>
 )

}  