import React, { useEffect } from 'react'
import axios from 'axios'
import { Stack, Row, Col } from 'react-bootstrap'
import './estatusColaboradoresStyle.css'

export const EstatusColaboradores = function() {

    const baseUrl = import.meta.env.VITE_APP_BASEURL
    const estatusColaboradesProc = import.meta.env.VITE_APP_API_estatusOperadores;
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

      const getOperadoresOff = async () => {
        const response = await axios.get(baseUrl+estatusColaboradesProc, config);
        setOperadoresOff(response.data);
      }

      const getColaboradoresOnline = async () => {
        const response = await axios.get(baseUrl+estatusEstacionesProc, config)
        setEstatusEstaciones(response.data);
      }

      useEffect(() => {
        getColaboradores();
        getOperadoresOff();
        getColaboradoresOnline();
  
     }, []);

        if (!colaboradores) {
            return null
        };                    
 
    return (   
        <>
            <div className="px-5">
                <Row xl={12} xs={12} className= "colTitle"> 
                    <h1 style={{marginTop: "0.3em", marginBottom: "0.3em"}}>Estatus colaboradores </h1>
                </Row>


                <Row>
                    <Col xxl={10} xl={9} lg={12}>
                        <Col className= "colSubTitle" >
                            <h3>Colaboradores Online</h3>
                        </Col>
                         
                        <Row className="rowCards">

                            {colaboradores?.length > 0 && colaboradores.filter(colaboradores => colaboradores.ACCION === "LOGIN").map((colaborador, index) => ( 
                                <Col md={3} sm={5} xs={11} key={index} 
                                    className = {
                                        colaborador.error === 1 ? "cardYellow"
                                        : colaborador.error === 2 ? "cardRed"
                                        : colaborador.error === 3 ? "cardGreen"
                                        : "cardGray"
                                }> 

                                    <Row className= "rowImgName">
                                        <Col xs={4}>
                                            <img src={`data:image/jpeg;base64,${colaborador.Foto}`} className= "cardImg"/>
                                        </Col>
                                        
                                        <Col xs={8} className= "cardName"> 
                                            <h6 style={{marginTop: "1em", fontSize: "18px"}}> {colaborador.NOMBRE} </h6>
                                            <h6 style={{marginTop: "0.2em", fontSize: "14px"}}> {colaborador.DESCRIPCION} </h6>
                                        </Col>
                                    </Row>
                                    
                                    <Row className= "rowInfo" style={{marginTop: "0.7em"}}>
                                        <Col className= "rowEstacion" style={{marginRight: "0.7em"}}>
                                            <h6 style={{marginTop: "0.2em", fontSize: "20px"}}> {colaborador.NumeroEstacion} </h6>
                                            <h6 style={{fontSize: "18px"}}>Estación de {colaborador.DescripcionPantalla}</h6>
                                        </Col>
                                        
                                        <Col className= "rowEstacion">      
                                            <h6 style={{marginTop: "0.5em",fontSize: "18px"}}> Turno: </h6>
                                            <h6 style={{fontSize: "18px"}}> {colaborador.TURNO} </h6>
                                            <h6 style={{fontSize: "18px"}}> {colaborador.TIEMPO} </h6>

                                        </Col>
                                    </Row>

                                    <Row className= "rowPausa" style={{marginTop: "0.7em"}}>
                                            <Row >
                                                <h6 style={{fontSize: "16px"}}> {colaborador.MENSAJE}</h6>
                                            </Row>
                                    </Row>

                                    <Row className= "rowCliente" style={{marginTop: "0.7em"}}>
                                        <Row>
                                            <Col>
                                                <h6 style={{fontSize: "16px"}}> {colaborador.NombreCita} </h6>
                                                <h6 style={{fontSize: "16px"}}> {colaborador.NumeroCita} </h6>
                                            </Col>
                                        </Row>
                                    </Row>
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    <Col xxl={2} xl={3} lg={12}>
                        <Col className= "colSubTitle">
                            <h3>Offline</h3>
                        </Col>
                        
                        <Col style={{textAlign: "Center", justifyContent: "center"}}>

                            {operadoresOff?.length > 0 && operadoresOff.filter(operadorOff => operadorOff.ACCION === "LOGOUT").map((operadorOff, index) =>
                                <Col xs={12} key={index} className= "Offlinecard">
                                    <Row className= "rowOfflineImgName">
                                        <Col xs={5} className= "offlineCardImg">
                                            <img src={`data:image/jpeg;base64,${operadorOff.Foto}`} className= "offlineImg"/>
                                        </Col>

                                        <Col xs={7} className= "OfflinecardName"> 
                                            <h6 style={{marginTop: "0.5em", fontSize: "20px"}}> {operadorOff.NOMBRE} </h6>
                                            <h6 style={{marginTop: "0.5em", fontSize: "14px"}}> {operadorOff.MOTIVO} </h6>
                                            <h6 style={{fontSize: "16px"}}> {operadorOff.TIEMPOLOGUSUARIO} </h6>
                                        </Col>
                                    </Row>
                                </Col>
                            )}

                        </Col>
                    </Col>   
                </Row>
            </div>  
        </>
    )
}  

