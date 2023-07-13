import React from "react"
import navBarStyles  from "./navbar.module.css"
import { Link } from "react-router-dom";
import { SlScreenDesktop, SlUser, SlSettings, SlLogout} from "react-icons/sl";

export const NavBar = function() {

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
                    <Link to='/' className={navBarStyles.link}>
                        <SlLogout/>                    
                    </Link>  
                </a>
            </div>
        </>
 )
}  


 































