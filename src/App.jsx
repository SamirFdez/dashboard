import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Estacion } from './Views/estaciones/estacion'
import { Login } from './Views/Login/login'
import { Operadores } from './Views/operadores/operadores'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/estacion' element={<Estacion/>}/>
          <Route path='/operadores' element={<Operadores/>}/>          
        </Routes>
    </>
  )
}

export default App
