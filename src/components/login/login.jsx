import React, { useState } from 'react'
import logintStyles from './login.module.css'
import Logo from '../../assets/img/user.png';
import swal from 'sweetalert';
import axios from 'axios';


export const LoginForm = function() {

    const baseUrl = import.meta.env.VITE_APP_API_LOGIN;
    const ApiKey = import.meta.env.VITE_APP_APIKEY;
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");
    const [login, setLogin] = React.useState(null);

    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': ApiKey
        }
      };

        const handleUsername = (e) => {
            setUsername(e.target.value);
        }

        const handlePassword = (e) => {
            setPassword(e.target.value);
        }
        
        const iniciarSesion = async () => {

            try {

                if(username.length === 0 || password.length === 0) {
                    swal("usuario vacio", "", "error");
                    return
                }

                const response = await axios.get(baseUrl+`@Username=${username},@Password=${password}`,config);
                console.log("Eta' e' la psicopatada: ", response.data)

                if(response.data[0] ) {
                    setLogin(response.data[0]);
                    window.location.href = "/estaciones";
                    return
                }

                swal("Usuario mal", "", "error");
                setUsername("");
                setPassword("");

                } catch(err) {
                    console.log(err.message)
                }

        }

        const noRecargarPagina = (e) => {
            e.preventDefault();
        }

        console.log(username, password);

    return (
        <>
         <div className={logintStyles.LoginBox}>
         <img className={logintStyles.LoginBoxLogo} src={Logo} alt="Logo"/> 
         <h1 className={logintStyles.LoginBoxH1}>Iniciar Sesión</h1>   

         <form onSubmit={noRecargarPagina}>
         <label className={logintStyles.LoginBoxLabel} htmlFor="username"> Usuario </label>
         <input name="username" value={username} onChange={handleUsername} className={logintStyles.LoginBoxInput} type="text" placeholder="Ingrese su nombre de usuario"/>

         <label className={logintStyles.LoginBoxLabel} htmlFor="password">Contraseña</label>
         <input name="password" value={password} onChange={handlePassword} className={logintStyles.LoginBoxInput} type="password" placeholder="Ingrese su contraseña"/>

         <input onClick= {iniciarSesion} className={logintStyles.LoginBoxButton} type="submit" value="Iniciar sesión"/>
        </form>

        </div>
        </>
    )
}