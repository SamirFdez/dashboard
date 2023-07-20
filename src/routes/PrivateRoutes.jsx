import { Route, Routes } from 'react-router-dom';
import { Estacion } from '../Views/estaciones/estacion'
import { Operadores } from '../Views/operadores/operadores'
export const PrivateRoutes = () => {
    return (
        <Routes>
                <Route path='/estaciones' element={<Estacion/>}/>
                <Route path='/operadores' element={<Operadores/>}/>   
        </Routes>
    );
};