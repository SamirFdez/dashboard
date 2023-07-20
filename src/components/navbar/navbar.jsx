import React from "react"
import navBarStyles  from "./navbar.module.css"
import { Link } from "react-router-dom";
import { SlScreenDesktop, SlUser, SlSettings, SlLogout} from "react-icons/sl";
import {useDispatch} from 'react-redux'
import {updateAuthenticationState} from '../../store/authentication'

export const NavBar = function() {
    const dispatch = useDispatch()

    const handleLogOutUser = () => {
        dispatch(updateAuthenticationState('no-authenticated'))
    }

    return (   
        <>
            <div className={navBarStyles.sidenav}>


                <a className={navBarStyles.iconosUp}>
                    <Link to='/estaciones' className={navBarStyles.link}>
                        <SlScreenDesktop/>             
                    </Link>   
                </a>
                <a className={navBarStyles.iconosUp}>
                    <Link to='/operadores' className={navBarStyles.link}>
                        <SlUser/>             
                    </Link>  
                </a>

                <a className={navBarStyles.iconoSetting}>
                    <Link to='' className={navBarStyles.link}>
                        <SlSettings/>                    
                    </Link>  
                </a>

                <a className={navBarStyles.iconoLogOut}>
                    <Link to='/' className={navBarStyles.link} onClick={handleLogOutUser}>
                        <SlLogout/>                    
                    </Link>  
                </a>
            </div>
        </>
 )
}  


 































