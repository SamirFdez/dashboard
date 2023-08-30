import { Container, Row, Col } from 'react-bootstrap'
import cantidadDeTurnosStyles  from "./cantidadDeTurnos.module.css"
import axios from 'axios';
import React, { useEffect } from 'react';


export const CantidadDeTurnos = function() {

    const baseUrl = import.meta.env.VITE_APP_API_cantidadDeTurnos;

    const ApiKey = import.meta.env.VITE_APP_APIKEY;

    const [cantidadTurno, setCantidadTurno] = React.useState(null);

    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': ApiKey
        }
      };

      const getCantidadDeTurnos = async () => {
        const response = await axios.get(baseUrl, config);
        setCantidadTurno(response.data)
      }

      useEffect(() => {
        getCantidadDeTurnos();

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

                    {cantidadTurno.map((canturno, index) => (
                    <Col xl={2} lg={3} md={4} sm={5} xs= {5} key={index} className= { cantidadDeTurnosStyles.card }>
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
                            
                                {canturno.TIEPOESPERA} min
                            
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