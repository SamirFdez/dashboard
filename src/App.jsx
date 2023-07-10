import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Estacion } from './Views/estaciones/estacion'
import { Login } from './Views/Login/login'


function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/estacion' element={<Estacion/>}/>
        </Routes>
    </>
  )
}

export default App
