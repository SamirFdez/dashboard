import React, { useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import EstacionesCardsStyles  from "./estacionesCards.module.css"

export const EstacionsCards = function() {

    const baseUrl = import.meta.env.VITE_APP_BASEURL
    const estatusColaboradesProc = import.meta.env.VITE_APP_API_estatusColaboradores;
    const ApiKey = import.meta.env.VITE_APP_APIKEY;
    const [colaboradores, setColaboradores] = React.useState(null);

    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': ApiKey
        }
      };

      const getEstacionesCards = async () =>{
        const response = await axios.get(baseUrl+estatusColaboradesProc, config);
        setColaboradores(response.data);
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
                                        : colaborador.ERROR === 2 ? EstacionesCardsStyles.cardGreen
                                        : colaborador.ERROR === 3 ? EstacionesCardsStyles.cardBlue
                                        : colaborador.ERROR === 4 ? EstacionesCardsStyles.cardGreenSpecial
                                        : EstacionesCardsStyles.cardGray 
                                }> 

                                    <Row className= { EstacionesCardsStyles.rowImgName }>
                                        <Col xs={4}>
                                            <img src={`data:image/jpeg;base64,${colaborador.Foto}`} 
                                            className= { 
                                                colaborador.ERROR === 3 ? EstacionesCardsStyles.cardImgOffline
                                                : EstacionesCardsStyles.cardImg}/>
                                        </Col>
                                        
                                        <Col xs={8} 
                                                className= { 
                                                colaborador.ERROR === 3 ? EstacionesCardsStyles.cardNameOffline
                                                : EstacionesCardsStyles.cardName}>
                                            <h3 style={{marginTop: "1em"}}> {colaborador.NombreEmpleado} </h3>
                                            <h4 style={{marginTop: "0.2em"}}> {colaborador.GrupoEstacion} </h4>
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
                                            <h4> {colaborador.TiempoGlobal} </h4>

                                        </Col>
                                    </Row>

                                    <Row className= { EstacionesCardsStyles.rowPausa } style={{marginTop: "1em"}}>
                                            <Row >
                                                <Col xs={7}>
                                                    <h4> {colaborador.EstatusTurno}</h4>
                                                </Col>
                                                <Col xs={5}> 
                                                    <h4> {colaborador.TiempoUltimoEstatus} </h4>
                                                </Col>
                                            </Row>
                                    </Row>

                                    <Row className= { EstacionesCardsStyles.rowCita } style={{marginTop: "1em"}}>
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
            </div>  
        </>
    )
}  

