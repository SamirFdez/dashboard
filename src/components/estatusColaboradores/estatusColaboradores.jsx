import React, { useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import './estatusColaboradoresStyle.css'
import { TiempoTurno } from './tiempoTurno'
import { TiempoLogOut } from './tiempoLogOut'

export const EstatusColaboradores = function() {

    const baseUrl = import.meta.env.VITE_APP_BASEURL
    const estatusColaboradesProc = import.meta.env.VITE_APP_API_estatusOperadores;
    const ApiKey = import.meta.env.VITE_APP_APIKEY;
    const [operadoresOn, setOperadoresOn] = React.useState(null);
    const [operadoresOff, setOperadoresOff] = React.useState(null);

    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': ApiKey
        }
      };

      const getOperadoresOn = async () =>{
        const response = await axios.get(baseUrl+estatusColaboradesProc, config);
        setOperadoresOn(response.data);
      }

      const getOperadoresOff = async () => {
        const response = await axios.get(baseUrl+estatusColaboradesProc, config);
        setOperadoresOff(response.data);
      }

      useEffect(() => {
        getOperadoresOn();
        getOperadoresOff();
  
     }, []);

        if (!operadoresOn) {
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

                            {operadoresOn?.length > 0 && operadoresOn.filter(colaboradores => colaboradores.ACCION === "LOGIN").map((operadoresOn, index) => ( 
                                <Col md={3} sm={5} xs={11} key={index} 
                                    className = {
                                        operadoresOn.error === 1 ? "cardYellow"
                                        : operadoresOn.error === 2 ? "cardRed"
                                        : operadoresOn.error === 3 ? "cardGreen"
                                        : "cardGray"
                                }> 

                                    <Row className= "rowImgName">
                                        <Col xs={4}>
                                            <img src={`data:image/jpeg;base64,${operadoresOn.Foto}`} className= "cardImg"/>
                                        </Col>
                                        
                                        <Col xs={8} className= "cardName"> 
                                            <h6 style={{marginTop: "1em", fontSize: "18px"}}> {operadoresOn.NOMBRE} </h6>
                                            <h6 style={{marginTop: "0.2em", fontSize: "14px"}}> {operadoresOn.DESCRIPCION} </h6>
                                        </Col>
                                    </Row>
                                    
                                    <Row className= "rowInfo" style={{marginTop: "0.7em"}}>
                                        <Col className= "rowEstacion" style={{marginRight: "0.7em"}}>
                                            <h6 style={{marginTop: "0.2em", fontSize: "20px"}}> {operadoresOn.NumeroEstacion} </h6>
                                            <h6 style={{fontSize: "18px"}}>Estación de {operadoresOn.DescripcionPantalla}</h6>
                                        </Col>
                                        
                                        <Col className= "rowEstacion">      
                                            <h6 style={{marginTop: "0.5em",fontSize: "18px"}}> Turno: </h6>
                                            <h6 style={{fontSize: "18px"}}> {operadoresOn.TURNO} </h6>
                                            {
                                                operadoresOn.TIEMPO !== "--:--:--" ?
                                                    <TiempoTurno operadoresOn={operadoresOn.TIEMPO}/>
                                                :
                                                    <h6 style={{fontSize: "18px"}}> --:--:-- </h6>
                                            }
                                        </Col>
                                    </Row>

                                    <Row className= "rowPausa" style={{marginTop: "0.7em"}}>
                                            <Row style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                <Col>
                                                    <h6 style={{fontSize: "16px"}}> {operadoresOn.MENSAJE}</h6>
                                                </Col>   
                                            </Row>
                                    </Row>

                                    <Row className= "rowCliente" style={{marginTop: "0.7em"}}>
                                        <Row>
                                            <Col>
                                                <h6 style={{fontSize: "16px"}}> {operadoresOn.NombreCita} </h6>
                                                <h6 style={{fontSize: "16px"}}> {operadoresOn.NumeroCita} </h6>
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
                                            <TiempoLogOut operadorOff={operadorOff.TIEMPOLOGUSUARIO}/>                                        </Col>
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

