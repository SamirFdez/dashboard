import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../Views/Dashboard';
import { Estaciones } from '../Views/estaciones';
import { Reporte } from '../Views/reporte';
import { ConfiguracionDashboard } from '../Views/configuracion';

export const PrivateRoutes = () => {
    
    return (
        <Routes>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/estaciones' element={<Estaciones/>}/>   
                <Route path='/reporte' element={<Reporte/>}/>   
                <Route path='/configuracion' element={<ConfiguracionDashboard/>}/> 
        </Routes>
    );
};