import { Container, Row, Col } from 'react-bootstrap'
import estatusColaboradoresStyles  from "./estatusColaboradores.module.css"
import React, { useEffect } from 'react'
import axios from 'axios'

export const EstatusColaboradores = function() {

    const baseUrl = import.meta.env.VITE_APP_API_estatusColaboradores;
    const ApiKey = import.meta.env.VITE_APP_APIKEY;
    const [colaboradores, setColaboradores] = React.useState(null);

    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': ApiKey
        }
      };

      const getColaboradores = async () =>{
        const response = await axios.get(baseUrl, config);
        setColaboradores(response.data);
      }

      useEffect(() => {
        getColaboradores();
  
     }, []);

    
        if (!colaboradores) {
            return null
        };                  
          
    return (   
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Row style={{textAlign: "left", justifyContent: "left"}}>

                            {colaboradores.map((colaborador, index) => ( 
                            <Col xxl={2} xl={4} lg={4} md={5} sm={5} xs= {11} key={index}
                                    className = { 
                                        colaborador.ERROR === 1 ? estatusColaboradoresStyles.cardGray 
                                        : colaborador.ERROR === 2 ? estatusColaboradoresStyles.cardGreen
                                        : colaborador.ERROR === 3 ? estatusColaboradoresStyles.cardBlue
                                        : colaborador.ERROR === 4 ? estatusColaboradoresStyles.cardGreenSpecial
                                        : estatusColaboradoresStyles.cardGray 
                                    }> 

                                <Row className= { estatusColaboradoresStyles.rowImgName }>
                                    <Col xs={4}>
                                        <img src={`data:image/jpeg;base64,${colaborador.Foto}`} alt="" className= { estatusColaboradoresStyles.cardImg }/>
                                    </Col>
                                    <Col xs={8} className= { estatusColaboradoresStyles.cardName }> 
                                        <h3 style={{marginTop: "1em"}}> {colaborador.NombreEmpleado} </h3>
                                        <h4 style={{marginTop: "0.2em"}}> {colaborador.GrupoEstacion} </h4>
                                    </Col>
                                </Row>
                                <Row className= { estatusColaboradoresStyles.rowInfo } style={{marginTop: "1em"}}>
                                    <Col className= { estatusColaboradoresStyles.rowEstacion } style={{marginRight: "1em"}}>
                                        <h1 style={{marginTop: "0.2em"}}> {colaborador.NumeroEstacion} </h1>
                                        <h2>Estación de {colaborador.GrupoEstacion}</h2>
                                    </Col>
                                    <Col className= { estatusColaboradoresStyles.rowEstacion } >      
                                        <h4 style={{marginTop: "0.5em"}}> Turno: </h4>
                                        <h1> {colaborador.Turno} </h1>

                                        <h4> {colaborador.TiempoGlobal} </h4>

                                    </Col>
                                </Row>
                                <Row className= { estatusColaboradoresStyles.rowPausa } style={{marginTop: "1em"}}>
                                    <Row >
                                        <Col xs={6}>
                                            <h4> {colaborador.EstatusTurno}</h4>
                                        </Col>
                                        <Col xs={4}> 
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
                </Row>
            </Container>
        </>
    )
}  

