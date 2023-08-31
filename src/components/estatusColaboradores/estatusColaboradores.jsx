import React, { useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import estatusColaboradoresStyles  from "./estatusColaboradores.module.css"


export const EstatusColaboradores = function() {

    const baseUrl = import.meta.env.VITE_APP_BASEURL
    const estatusColaboradesProc = import.meta.env.VITE_APP_API_estatusColaboradores;
    const estatusOperadoresOffProc = import.meta.env.VITE_APP_API_estatusOperadores;
    const estatusEstacionesProc = import.meta.env.VITE_APP_API_estatusEstaciones;
    const ApiKey = import.meta.env.VITE_APP_APIKEY;
    const [colaboradores, setColaboradores] = React.useState(null);
    const [operadoresOff, setOperadoresOff] = React.useState(null);
    const [estatusEstaciones, setEstatusEstaciones] = React.useState(null);

    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': ApiKey
        }
      };

      const getColaboradores = async () =>{
        const response = await axios.get(baseUrl+estatusColaboradesProc, config);
        setColaboradores(response.data);
      }

      const getColaboradoresOnline = async () => {
        const response = await axios.get(baseUrl+estatusEstacionesProc, config)
        setEstatusEstaciones(response.data);
      }

      const getOperadoresOff = async () => {
        const response = await axios.get(baseUrl+estatusOperadoresOffProc, config);
        setOperadoresOff(response.data);
      }

      useEffect(() => {
        getColaboradores();
        getOperadoresOff();
        getColaboradoresOnline();
  
     }, []);

        if (!colaboradores) {
            return null
        };                    

        console.log(estatusEstaciones)
    return (   
        <>
            <Row>
                <Col xl={12} xs={12} className= { estatusColaboradoresStyles.colTitle }> 
                    <h1 style={{marginTop: "0.3em", marginBottom: "0.3em"}}>Estatus colaboradoes </h1>
                </Col>
            </Row>  

            <Row>
                <Col xxl={10} xl={9} lg={12}>
                    <Col className= { estatusColaboradoresStyles.colSubTitle } >
                        <h3>Colaboradores Online</h3>
                    </Col>
                    
                    <Row className="justify-content-center px-5" >

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
                                            <Col xs={7}>
                                                <h4> {colaborador.EstatusTurno}</h4>
                                            </Col>
                                            <Col xs={5}> 
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

                <Col xxl={2} xl={3} lg={12}>
                    <Col className= { estatusColaboradoresStyles.colSubTitle }>
                        <h3>Offline</h3>
                    </Col>
                    
                    <Col style={{textAlign: "Center", justifyContent: "center"}}>

                        {operadoresOff?.length > 0 && operadoresOff.filter(operadorOff => operadorOff.ACCION === "LOGOUT").map((operadorOff, index) =>
                            <Col xl={12} lg={12} key={index} className= { estatusColaboradoresStyles.Offlinecard }>
                                <Row className= { estatusColaboradoresStyles.rowOfflineImgName }>
                                    <Col xs={5} className={estatusColaboradoresStyles.offlineCardImg}>
                                        <img src={`data:image/jpeg;base64,${operadorOff.Foto}`} alt="" className= { estatusColaboradoresStyles.offlineImg }/>
                                    </Col>

                                    <Col xs={7} className= { estatusColaboradoresStyles.OfflinecardName }> 
                                        <h4 style={{marginTop: "1.2em"}}> {operadorOff.NOMBRE} </h4>
                                        <h5 style={{marginTop: "0.6em"}}> {operadorOff.MOTIVO} </h5>
                                        <h3> {operadorOff.TIEMPOLOGUSUARIO} </h3>
                                    </Col>
                                </Row>
                            </Col>
                        )}

                    </Col>
                </Col>   
            </Row>
        </>
    )
}  

