import { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import EstacionesCardsStyles  from "./estacionesCards.module.css"
import { TiempoNotificado } from './tiempoNotificado'
import { TiempoGlobal } from './tiempoGlobal'
import { TiempoUltimoEstatus } from './tiempoUltimoEstatus'

export const EstacionsCards = function() {

    const baseUrl = import.meta.env.VITE_APP_BASEURL
    const estatusColaboradesProc = import.meta.env.VITE_APP_API_estatusColaboradores;
    const ApiKey = import.meta.env.VITE_APP_APIKEY;
    const [colaboradores, setColaboradores] = useState(null);

    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': ApiKey
        }
      };

      const getEstacionesCards = async () =>{

        try {
            const response = await axios.get(baseUrl+estatusColaboradesProc, config);
            setColaboradores(response.data);
            
        } catch (error) {
            console.error('Error al obtener el nuevo valor del contador:', error);
        }

      }

      useEffect(() => {
        getEstacionesCards();
  
     }, []);

        if (!colaboradores) {
            return null
        };                    
          
    return (   
        <>
            <div className="px-5">
                <Row xl={12} xs={12} className= { EstacionesCardsStyles.colTitle }> 
                    <h1 style={{marginTop: "0.3em", marginBottom: "0.3em"}}>Estatus estaciones </h1>
                </Row>
 
                <Row>
                    <Col xs={12}>
                        <Row style={{textAlign: "Center", justifyContent: "center"}}>

                            {colaboradores.map((colaborador, index) => ( 
                                <Col md={3} sm={5} xs={11} key={index}
                                    className = { 
                                        colaborador.ERROR === 1 ? EstacionesCardsStyles.cardGray 
                                        : colaborador.ERROR ===  2? EstacionesCardsStyles.cardGreen
                                        : colaborador.ERROR === 3 ? EstacionesCardsStyles.cardBlue
                                        : colaborador.ERROR === 4 ? EstacionesCardsStyles.cardGreenSpecial
                                        : EstacionesCardsStyles.cardGray 
                                }> 

                                    <Row className= { EstacionesCardsStyles.rowImgName }>
                                        <Col xs={4}>
                                            <img src={`data:image/jpeg;base64,${colaborador.Foto}`} 
                                            className= {EstacionesCardsStyles.cardImg}/>
                                        </Col>
                                        
                                        <Col xs={8} className= { EstacionesCardsStyles.cardName}>
                                            {
                                                colaborador.ERROR === 3 ?
                                                    (
                                                        <>
                                                            <h5 style={{marginTop: "1em"}}>Notificado</h5>
                                                            <h3> {colaborador.NombreEmpleado} </h3>
                                                            {
                                                                colaborador.Notificacion_24h === 0 ?
                                                                    <TiempoNotificado colaborador={colaborador.TiempoNotificacion}/>   
                                                                : 
                                                                    <h4 style={{marginTop: "0.2em", color: "#dc3545"}}> Más de un día </h4>

                                                            }

                                                        </>
                                                    ) : 
                                                    (
                                                        <>
                                                            <h3 style={{marginTop: "1em"}}> {colaborador.NombreEmpleado} </h3>
                                                            <h4 style={{marginTop: "0.2em"}}> {colaborador.GrupoEstacion} </h4>
                                                        </>
                                                    )
                                            }
                                        </Col>
                                    </Row>
                                    
                                    <Row className= { EstacionesCardsStyles.rowInfo } style={{marginTop: "1em"}}>
                                        <Col className= { EstacionesCardsStyles.rowEstacion } style={{marginRight: "1em"}}>
                                            <h1 style={{marginTop: "0.2em"}}> {colaborador.NumeroEstacion} </h1>
                                            <h2>Estación de {colaborador.GrupoEstacion}</h2>
                                        </Col>
                                        
                                        <Col className= { EstacionesCardsStyles.rowEstacion } >      
                                            <h4 style={{marginTop: "0.5em"}}> Turno: </h4>
                                            <h1> {colaborador.Turno} </h1>
                                            {
                                                colaborador.Global_24h === 0 ?
                                                    <TiempoGlobal colaborador={colaborador.TiempoGlobal}/>
                                                :
                                                    <h4> Más de un día </h4>
                                            }

                                        </Col>
                                    </Row>

                                    <Row className= { EstacionesCardsStyles.rowPausa } style={{marginTop: "1em"}}>
                                        <Row style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Col xs={7}>
                                                <h4> {colaborador.EstatusTurno}</h4>
                                            </Col>
                                            <Col xs={5}> 
                                                {
                                                    colaborador.UltEstatus_24h === 0 ?
                                                        <TiempoUltimoEstatus colaborador={colaborador.TiempoUltimoEstatus}/>
                                                    :
                                                        <h4> Más de un día </h4>
                                                }
                                            </Col> 
                                        </Row>
                                    </Row>

                                    <Row className= { EstacionesCardsStyles.rowCita } style={{marginTop: "1em"}}>
                                        <Row>
                                            <Col>
                                                {
                                                    colaborador.NombreCita !== null ?
                                                        <h4> {colaborador.NombreCita} </h4>
                                                    : null
                                                }
                                                {/* <h4> {colaborador.NumeroCita} </h4> */}
                                            </Col>
                                        </Row>
                                    </Row>
                                </Col>
                            ))}
                                
                        </Row>
                    </Col> 
                </Row>
            </div>  
        </>
    )
}  

