import { Container, Form, Row, Col, Button, Dropdown } from 'react-bootstrap'
import configuracionDashboardStyles  from "./configuracionDashboard.module.css"
import React from 'react';
import { FaMoon, FaSun } from "react-icons/fa6";

export const ConfigDashboard = function() {

 
    return (   
        <>
            <Row style={{marginTop: "1em", marginBottom: "1em"}}>
                <Col className= { configuracionDashboardStyles.colTitle }> 
                    <h1 style={{marginTop: "0.3em", marginBottom: "0.3em"}}>Configuración  </h1>
                </Col>
            </Row>

            <Container>
                <Form className={configuracionDashboardStyles.form}>
                
                <Container>
                    <Row className={configuracionDashboardStyles.formRow}>
                        <Col lg={4} md={6} sm={12} xs={12} style={{marginTop:"1em"}}>
                            <label className= {configuracionDashboardStyles.labelForm}> Tiempo de actualización de datos </label>
                        </Col>

                        <Col lg={8} md={6} sm={12} xs={12} style={{marginTop:"1em"}}>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" style={{fontSize:"1.5em", width:"100%"}}>
                                    Tiempo
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{fontSize:"1.5em"}}>
                                    <Dropdown.Item href="">1 Minuto</Dropdown.Item>
                                    <Dropdown.Item href="">2 Minutos</Dropdown.Item>
                                    <Dropdown.Item href="">3 Minutos</Dropdown.Item>
                                    <Dropdown.Item href="">5 Minutos</Dropdown.Item>
                                    <Dropdown.Item href="">10 Minutos</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>

                    <Row className={configuracionDashboardStyles.formGroup} style={{marginBottom: "3em"}}>
                    <Col lg={4} md={6} sm={12} xs={12} style={{marginTop:"1em"}}>
                            <label className= {configuracionDashboardStyles.labelForm}> Tema del dasboard </label>
                        </Col>

                        <Col lg={8} md={6} sm={12} xs={12} style={{marginTop:"1em"}}>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" style={{fontSize:"1.5em", width:"100%"}}>
                                    Tema 
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{fontSize:"1.5em"}}>
                                    <Dropdown.Item href="" style={{fontSize:"1em"}}><span><FaSun/></span> Modo light</Dropdown.Item>
                                    <Dropdown.Item href="" style={{fontSize:"1em"}}><span><FaMoon/></span> Modo dark</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>

                    <div style={{textAlign:"right"}}>
                        <Button variant="danger" style={{fontSize:"2em", width:"5em", marginRight:"1em"}}>
                            Cancelar
                        </Button>

                        <Button variant="success" type="submit" style={{fontSize:"2em", width:"5em"}}>
                            Guardar
                        </Button>
                    </div>

                    
                </Container>
                </Form>
            </Container>
        </>
 )

}  