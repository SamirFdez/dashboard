import { Container, Row, Col } from 'react-bootstrap'
import cantidadDeTurnosStyles  from "./cantidadDeTurnos.module.css"
import axios from 'axios';
import React from 'react';


export const CantidadDeTurnos = function() {

    const baseUrl = 'https://service.laserbluforms.signos-framework.com/GenericWeb?proctoken=SPREPORTEAREASDASBOARD';

    const [cantidadTurno, setCantidadTurno] = React.useState(null);

    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': 'AAAAoHa5oyc:APA91bEreCgMCWtdP2oHjsLrdd272TdxLCa0oZGrzBnv1pdj113PFvf_kheHvOhWKg0FO2urWD76wF35jOOq3nIh5urSE9DOgchW7Qx0yCy4evPxKbypb161X-FlFj-rz9es5nKWfQHv'
        }
      };

      React.useEffect(() => {
        axios.get(baseUrl, config).then((response) => {
            setCantidadTurno(response.data);
        });
      }, []);
    
        if (!cantidadTurno) {
            return null
        };

 
    return (   
        <>
            <Row style={{marginTop: "1em", marginBottom: "1em"}}>
                <Col className= { cantidadDeTurnosStyles.colTitle }> 
                    <h1 style={{marginTop: "0.3em", marginBottom: "0.3em"}}>Cantidad de turnos y tiempo de espera por área </h1>
                </Col>
            </Row>

            <Container>
                <Row className= { cantidadDeTurnosStyles.colBody }>

                    {cantidadTurno.map(canturno => (
                    <Col xl={2} lg={3} md={4} sm={5} xs= {5} className= { cantidadDeTurnosStyles.card }>
                        <Row>
                        <h3 style={{color: "white"}}> 
                            
                            {canturno.DESCRIPCION} 
                        
                        </h3> 
                        </Row>
                        <Container>
                        <Row style={{marginBottom:"1em"}}>
                            <Col className= { cantidadDeTurnosStyles.cardBody } style={{marginRight: "0.5em"}}> 
                            
                                {canturno.CANTIDAD} T
                            
                            </Col>
                            <Col className= { cantidadDeTurnosStyles.cardBody }> 
                            
                                {canturno.TIEPOESPERA}
                            
                            </Col>
                        </Row>
                        </Container>
                    </Col>
                    ))}
                </Row>
            </Container>
        </>
 )

}  