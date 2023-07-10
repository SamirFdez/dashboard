import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/foooter/footer'
import { Header } from './components/header/header'
import { Estacion } from './Views/estaciones/estacion'
import { LoginForm } from './components/login/login'


function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/estacion' element={<Estacion/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
