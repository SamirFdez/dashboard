import React, { useEffect, useState } from 'react';
import axios from 'axios';
import estatusEstacionesStyles  from "./estatusEstaciones.module.css"
import { Container, Row, Col } from 'react-bootstrap'

export const EstatusEstaciones = function() {

    const baseUrl = import.meta.env.VITE_APP_BASEURL
    const estatusEstacionesProc = import.meta.env.VITE_APP_API_estatusEstaciones;
    const ApiKey = import.meta.env.VITE_APP_APIKEY;
    const [estatusEstaciones, setEstatusEstaciones] = useState(null);

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
            <div className="px-5" style={{ marginBottom: "1em" }}>
                <Row className={estatusEstacionesStyles.colTitle}>
                    <h1 style={{ marginTop: "0.3em", marginBottom: "0.3em" }}> Estatus estaciones </h1>
                </Row>
            </div>

            <Row className={estatusEstacionesStyles.colBody}>
                {estatusEstaciones.map((estatusEstaciones, index) => (
                    <Col xs="auto" className={estatusEstacionesStyles.card} key={index}>
                        <Row>
                            <h3 style={{ color: "white" }}>{estatusEstaciones.Estacion}</h3>
                        </Row>
                        <Container>
                            <Row>
                                <Col className={estatusEstacionesStyles.cardBody} style={{ marginRight: "1em" }}>
                                    <h4> Onl. {estatusEstaciones.EnLinea}</h4>
                                </Col>
                                <Col className={estatusEstacionesStyles.cardBody}>
                                    <h4> Disp. {estatusEstaciones.Disponibles}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                ))}
            </Row>
        </>
    );

}  