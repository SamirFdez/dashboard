import { Container, Form, Row, Col, Button, Dropdown } from 'react-bootstrap'
import configuracionDashboardStyles  from "./configuracionDashboard.module.css"
import React from 'react';


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

                    <Form.Group className={configuracionDashboardStyles.formGroup}>
                        <Form.Label className= {configuracionDashboardStyles.labelForm}>Tiempo de actualización de datos</Form.Label>
                        <Dropdown>
                        <Dropdown.Toggle variant="primary" style={{fontSize:"1.5em"}}>
                            Tiempo por defecto
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{fontSize:"1.5em"}}>
                            <Dropdown.Item href="#/action-1">1 Minuto</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">2 Minutos</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">3 Minutos</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">5 Minutos</Dropdown.Item>
                            <Dropdown.Item href="#/action-5">10 Minutos</Dropdown.Item>

                        </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>

                    <Form.Group className={configuracionDashboardStyles.formGroup}>
                    <Form.Label className= {configuracionDashboardStyles.labelForm}>Tiempo de actualización de datos</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="danger" type="submit" style={{fontSize:"1.5em", marginRight:"1em"}}>
                        Cancelar
                    </Button>

                    <Button variant="success" type="submit" style={{fontSize:"1.5em"}}>
                        Guardar
                    </Button>
                </Form>
            </Container>
        </>
 )

}  