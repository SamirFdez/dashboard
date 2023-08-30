import { Route, Routes } from 'react-router-dom';
import { Estacion } from '../Views/estacion';
import { Operadores } from '../Views/operadores';
import { ConfiguracionDashboard } from '../Views/configuracion';

export const PrivateRoutes = () => {
    
    return (
        <Routes>
                <Route path='/estaciones' element={<Estacion/>}/>
                <Route path='/operadores' element={<Operadores/>}/>   
                <Route path='/configuracion' element={<ConfiguracionDashboard/>}/> 
        </Routes>
    );
};