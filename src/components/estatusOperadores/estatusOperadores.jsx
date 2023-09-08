import React, {useEffect} from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import estatusOperadoresStyles  from "./estatusOperadores.module.css"
import { TiempoReporte } from './TiempoReporte'

export const EstatusOperadores = function() {
        
    const baseUrl = import.meta.env.VITE_APP_BASEURL
    const estatusOperadores = import.meta.env.VITE_APP_API_estatusOperadores;
    const ApiKey = import.meta.env.VITE_APP_APIKEY;
    const [operadores, setOperadores] = React.useState(null);

    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': ApiKey
        }
      };

      const getEstatusOperadores = async () => {
        const response = await axios.get(baseUrl+estatusOperadores, config);
        setOperadores(response.data)
      }

      useEffect(() => {
        getEstatusOperadores();

     }, []);
    
    
      if (!operadores) {
        return null
    };

    return (   
        <>   
            <div className="px-5">
                <Row className= { estatusOperadoresStyles.colTitle }> 
                    <h1 style={{marginTop: "0.3em", marginBottom: "0.3em"}}>Estatus Operadores</h1>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Row style={{marginBottom: "1em", justifyContent: "Center"}}>
                                    
                            {operadores.map((operador, index) => (
                                <Col md={3} sm={5} xs={11} className= { estatusOperadoresStyles.card } key={index}>
                                    <Row className= { estatusOperadoresStyles.rowImgName }>
                                        <Col xs={5}>
                                            <img src={`data:image/jpeg;base64,${operador.Foto}`} alt="Imagen operador" className= { estatusOperadoresStyles.cardImg }/>
                                        </Col>
                                        <Col xs={7} className= { estatusOperadoresStyles.cardName }> 
                                            <h3 style={{marginTop: "1.2em"}}> {operador.NOMBRE} </h3>
                                            <h4 style={{marginTop: "0.6em"}}> {operador.DESCRIPCION} </h4>
                                        </Col>
                                    </Row>
                                    
                                    <Row className= { estatusOperadoresStyles.rowReporte } style={{marginTop: "1em"}}>
                                        <Row style={{marginTop: "0.5em"}}>
                                            <Col xs={7}>
                                                <h4> Atendidos</h4>
                                            </Col>
                                            <Col xs={2}> 
                                                <h4> {operador.ATENDIDOS} </h4>
                                            </Col>
                                        </Row>
                                        
                                        <Row>
                                            <Col xs={7}>
                                                <h4> Finalizados</h4>
                                            </Col>
                                            <Col xs={2}> 
                                                <h4> {operador.FINALIZADO} </h4>
                                            </Col>
                                        </Row>
                                        
                                        <Row>
                                            <Col xs={7}>
                                                <h4> Declinados</h4>
                                            </Col>
                                            <Col xs={2}> 
                                                <h4> {operador.DECLINADOS} </h4>
                                            </Col>
                                        </Row>
                                        
                                        <Row>
                                            <Col xs={7}>
                                                <h4> Transferidos</h4>
                                            </Col>
                                            <Col xs={2}>
                                                <h4> {operador.TRANSFERIDOS} </h4>
                                            </Col>
                                        </Row>
                                        
                                        <Row style={{marginBottom: "0.5em"}}>
                                            <Col xs={7}>
                                                <h4> En espera</h4>
                                            </Col>
                                            <Col xs={2}> 
                                                <h4> {operador.ESPERA} </h4>
                                            </Col>
                                        </Row>
                                    </Row>
                                    
                                    <Row className= { estatusOperadoresStyles.rowTimeOnline } style={{marginTop: "1em"}}>
                                        <Row style={{marginTop: "0.5em"}}>
                                            <Col xs={7}>
                                                <h4> { "Tiempo " + operador.ACCION.toLowerCase()}:</h4>
                                            </Col>
                                            <Col xs={2}> 
                                                <TiempoReporte operador={operador.TIEMPOLOGUSUARIO}/>
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