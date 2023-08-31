import React, { useEffect } from 'react';
import axios from 'axios';
import estatusEstacionesStyles  from "./estatusEstaciones.module.css"
import { Container, Row, Col } from 'react-bootstrap'

export const EstatusEstaciones = function() {

    const baseUrl = import.meta.env.VITE_APP_BASEURL
    const estatusEstacionesProc = import.meta.env.VITE_APP_API_estatusEstaciones;
    const ApiKey = import.meta.env.VITE_APP_APIKEY;
    const [estatusEstaciones, setEstatusEstaciones] = React.useState(null);

    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': ApiKey
        }
      };

      const getEstatusEstaciones = async () => {
        const response = await axios.get(baseUrl+estatusEstacionesProc, config);
        setEstatusEstaciones(response.data)
      }

      useEffect(() => {
        getEstatusEstaciones();

     }, []);
    
        if (!estatusEstaciones) {
            return null
        };

    return (
        <>
            <Row style={{ marginBottom: "1em" }}>
                <Col className={estatusEstacionesStyles.colTitle}>
                    <h1 style={{ marginTop: "0.3em", marginBottom: "0.3em" }}> Estatus estaciones </h1>
                </Col>
            </Row>

            <Row className={estatusEstacionesStyles.colBody}>
                {estatusEstaciones.map((estatusEstaciones, index) => (
                    <Col xxl={2} xl={2} lg={3} md={4} sm={5} xs={5} className={estatusEstacionesStyles.card} key={index}>
                        <Row>
                            <h3 style={{ color: "white" }}>Servicio</h3>
                        </Row>

                        <Container>
                            <Row>
                                <Col className={estatusEstacionesStyles.cardBody} style={{ marginRight: "0.5em" }}>
                                    Onl. {estatusEstaciones.EnLinea}
                                </Col>
                                <Col className={estatusEstacionesStyles.cardBody}>
                                    Disp. {estatusEstaciones.Disponibles}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                ))}
            </Row>
        </>
    );

}  