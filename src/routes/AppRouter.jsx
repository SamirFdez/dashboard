import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { PrivateRoutes } from "./PrivateRoutes"
import { Login } from '../Views/Login/login'
import {useSelector} from 'react-redux'

let status = 'authenticated';

export const AppRouter = () => {
    const authenticationState = useSelector(state => state.auth.state)
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {   
                        authenticationState === 'authenticated'
                        ? <Route path="/*" element={<PrivateRoutes />} />
                        : <Route path="/" element={<Login />} />
                    }
                    <Route path='*' element={<Navigate to='/' replace />} /> 
                </Routes>
            </BrowserRouter>
        </>
    )
}