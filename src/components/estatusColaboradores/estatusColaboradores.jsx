import { Row, Col } from 'react-bootstrap'
import estatusColaboradoresStyles  from "./estatusColaboradores.module.css"
import User from '../../assets/img/person.jpg'
import React from 'react'
import axios from 'axios'

export const EstatusColaboradores = function() {

    const baseUrl = 'https://service.laserbluforms.signos-framework.com/GenericWeb?proctoken=spReporteEstacionesEstatusDashBoard';

    const [colaboradores, setColaboradores] = React.useState(null);

    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': 'AAAAoHa5oyc:APA91bEreCgMCWtdP2oHjsLrdd272TdxLCa0oZGrzBnv1pdj113PFvf_kheHvOhWKg0FO2urWD76wF35jOOq3nIh5urSE9DOgchW7Qx0yCy4evPxKbypb161X-FlFj-rz9es5nKWfQHv'
        }
      };

      React.useEffect(() => {
        axios.get(baseUrl, config).then((response) => {
            setColaboradores(response.data);
        });
      }, []);
    
        if (!colaboradores) {
            return null
        };

    return (   
        <>
            <Row>
                <Col xl={12} xs={12} className= { estatusColaboradoresStyles.colTitle }> 
                    <h1 style={{marginTop: "0.3em", marginBottom: "0.3em"}}>Estatus colaboradoes </h1>
                </Col>
            </Row>  

            <Row>
                <Col xl={9} lg={12}>
                    <Col className= { estatusColaboradoresStyles.colSubTitle } >
                        <h3>15 colaboradores Online, 8 disponibles</h3>
                    </Col>
                    
                        <Row style={{textAlign: "Center", justifyContent: "center"}}>
                            {colaboradores.map(colaborador => (
                            <Col xxl={2} xl={4} lg={4} md={5} sm={8} xs= {12} className= { estatusColaboradoresStyles.card } style={{marginRight: "1.5em"}}>
                                <Row className= { estatusColaboradoresStyles.rowImgName }>
                                    <Col xs={4}>
                                        <img src={User} alt="" className= { estatusColaboradoresStyles.cardImg }/>
                                    </Col>
                                    <Col xs={8} className= { estatusColaboradoresStyles.cardName }> 
                                        <h3 style={{marginTop: "1em"}}> {colaborador.NombreEmpleado} </h3>
                                        <h4 style={{marginTop: "0.2em"}}> {colaborador.GrupoEstacion} </h4>
                                    </Col>
                                </Row>
                                <Row className= { estatusColaboradoresStyles.rowInfo } style={{marginTop: "1em"}}>
                                    <Col className= { estatusColaboradoresStyles.rowEstacion } style={{marginRight: "1em"}}>
                                        <h1 style={{marginTop: "0.2em"}}> {colaborador.NumeroEstacion} </h1>
                                        <h3>Estación de {colaborador.GrupoEstacion}</h3>
                                    </Col>
                                    <Col className= { estatusColaboradoresStyles.rowEstacion } >      
                                        <h4 style={{marginTop: "0.5em"}}> Atendiendo: </h4>
                                        <h1> {colaborador.Turno} </h1>
                                        <h4> {colaborador.TiempoGlobal} </h4>
                                    </Col>
                                </Row>
                                <Row className= { estatusColaboradoresStyles.rowPausa } style={{marginTop: "1em"}}>
                                    <Row >
                                        <Col xs={6}>
                                            <h4> En pausa:</h4>
                                        </Col>
                                        <Col xs={4} style={{color: "red"}}> 
                                            <h4> {colaborador.TiempoUltimoEstatus} </h4>
                                        </Col>
                                    </Row>
                                </Row>
                                <Row className= { estatusColaboradoresStyles.rowCliente } style={{marginTop: "1em"}}>
                                    <Row>
                                        <Col>
                                            <h4> {colaborador.NombreCita} </h4>
                                            <h4> {colaborador.NumeroCita} </h4>
                                        </Col>
                                    </Row>
                                </Row>
                            </Col>
                            ))}
                        </Row>
                    </Col>

                    <Col xl={3} lg={12}>
                        <Col className= { estatusColaboradoresStyles.colSubTitle }>
                            <h3>3 Offline</h3>
                        </Col>
                        <Row style={{textAlign: "Center", justifyContent: "center"}}>
                            <Col xl={12} lg={12} className= { estatusColaboradoresStyles.Offlinecard }>
                                <Row className= { estatusColaboradoresStyles.rowOfflineImgName }>
                                    <Col xs={5} className={estatusColaboradoresStyles.offlineCardImg}>
                                        <img src={User} alt="" className= { estatusColaboradoresStyles.offlineImg }/>
                                    </Col>
                                    <Col xs={7} className= { estatusColaboradoresStyles.OfflinecardName }> 
                                        <h4 style={{marginTop: "1.2em"}}>Juan Perez Sosa</h4>
                                        <h5 style={{marginTop: "0.6em"}}>Representate de Servicio</h5>
                                        <h3>01:53:00</h3>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className= { estatusColaboradoresStyles.Offlinecard }>
                                <Row className= { estatusColaboradoresStyles.rowOfflineImgName }>
                                    <Col xs={5} className={estatusColaboradoresStyles.offlineCardImg}>
                                        <img src={User} alt="" className= { estatusColaboradoresStyles.offlineImg }/>
                                    </Col>
                                    <Col xs={7} className= { estatusColaboradoresStyles.OfflinecardName }> 
                                        <h3 style={{marginTop: "1.2em"}}>Juan Perez Sosa</h3>
                                        <h4 style={{marginTop: "0.6em"}}>Representate de Servicio</h4>
                                        <h3>01:53:00</h3>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Col>   
                </Row>

            
        </>
 )
}  

