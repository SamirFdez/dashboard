import React from "react"
import navBarStyles  from "./navbar.module.css"
import { Link, useNavigate } from "react-router-dom";
import { SlScreenDesktop, SlUser, SlSettings, SlLogout} from "react-icons/sl";
import {useDispatch} from 'react-redux'
import {updateAuthenticationState} from '../../store/authentication'

export const NavBar = function() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleLogOutUser = () => {
        swal({
            title: "¿Estás seguro de cerrar sesión?",
            text: "",
            icon: "warning",
            buttons: ["Cancelar", true],
            dangerMode: true,
          })
          .then((cerrarSesion) => {
            if (cerrarSesion) {
                navigate("/")
                dispatch(updateAuthenticationState(false))
                sessionStorage.removeItem("nombre")
            } else {
            }
          });
        
    }

    return (   
        <>
            <div className={navBarStyles.sidenav}>

                <div className={navBarStyles.iconosUp}>
                    <Link to='/estaciones' className={navBarStyles.link}>
                        <SlScreenDesktop/>             
                    </Link>   
                </div>
                <div className={navBarStyles.iconosUp}>
                    <Link to='/operadores' className={navBarStyles.link}>
                        <SlUser/>             
                    </Link>  
                </div>

                <div className={navBarStyles.iconoSetting}>
                    <Link to='' className={navBarStyles.link}>
                        <SlSettings/>                    
                    </Link>  
                </div>

                <div className={navBarStyles.iconoLogOut}>
                    <Link className={navBarStyles.link} onClick={handleLogOutUser}>
                        <SlLogout/>                    
                    </Link>  
                </div>
            </div>
        </>
 )
}  


 































