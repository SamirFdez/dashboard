import React, { useEffect } from 'react';
import axios from 'axios';
import cantidadDeTurnosStyles  from "./cantidadDeTurnos.module.css"
import { Container, Row, Col, Card } from 'react-bootstrap'

export const CantidadDeTurnos = function() {

    const baseUrl = import.meta.env.VITE_APP_BASEURL
    const cantidadDeTurnosProc = import.meta.env.VITE_APP_API_cantidadDeTurnos;
    const ApiKey = import.meta.env.VITE_APP_APIKEY;
    const [cantidadTurno, setCantidadTurno] = React.useState(null);
 
    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': ApiKey
        }
      };

      const getCantidadDeTurnos = async () => {
        const response = await axios.get(baseUrl+cantidadDeTurnosProc, config);
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
            <div className="px-5">
                <Row className={cantidadDeTurnosStyles.colTitle} style={{marginTop: "1em", marginBottom: "1em"}}>
                    <h1 style={{marginTop: "0.3em", marginBottom: "0.3em"}}> Cantidad de turnos y tiempo de espera por área </h1>
                </Row>
            </div>

            <Container>
                <Row className= { cantidadDeTurnosStyles.colBody }>

                    {cantidadTurno.map((canturno, index) => (
                    <Col xs="auto" key={index} 
                    className = { 
                        canturno.ERROR === 1 ? cantidadDeTurnosStyles.cardYellow 
                        : canturno.ERROR === 2 ? cantidadDeTurnosStyles.cardRed
                        : cantidadDeTurnosStyles.cardGray }
                    >
                        <Row>
                            <h3 style={{color: "white"}}> {canturno.DESCRIPCION} </h3> 
                        </Row>
                        <Container>
                            <Row style={{marginBottom:"1em"}}>
                                <Col className= { cantidadDeTurnosStyles.cardBody } style={{marginRight: "1em"}}> 
                                    <h4> {canturno.CANTIDAD} Turno </h4>
                                </Col>
                                <Col className= { cantidadDeTurnosStyles.cardBody }> 
                                    <h4 style={{ alignItems: "center"}}> {canturno.TIEPOESPERA} min </h4>
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