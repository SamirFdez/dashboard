import React, { useState } from 'react'
import logintStyles from './login.module.css'
import Logo from '../../assets/img/user.png';
import swal from 'sweetalert';
import axios from 'axios';


export const LoginForm = function() {

    const baseUrl = "GenericWeb?proctoken=spLoginUser&ProcParams=@Username='{login.Usuario}',@Password='{login.Clave}";

    const [login, setlogin] = React.useState(null);

    const config = {
        headers:{
            "Content-Type": "application/json",
            'APIKey': 'AAAAoHa5oyc:APA91bEreCgMCWtdP2oHjsLrdd272TdxLCa0oZGrzBnv1pdj113PFvf_kheHvOhWKg0FO2urWD76wF35jOOq3nIh5urSE9DOgchW7Qx0yCy4evPxKbypb161X-FlFj-rz9es5nKWfQHv'
        }
      };

      React.useEffect(() => {
        axios.get(baseUrl, config).then((response) => {
          setlogin(response.data);
        });
      }, []);
    
        if (!login) {
            return null
        };

        console.log(login);

    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    const noRecargarPagina = (e) => {
        e.preventDefault();
    }

    return (
        <>
         <div className={logintStyles.LoginBox}>
         <img className={logintStyles.LoginBoxLogo} src={Logo} alt="Logo"/> 
         <h1 className={logintStyles.LoginBoxH1}>Iniciar Sesión</h1>   

         <form onSubmit={noRecargarPagina}>
         <label className={logintStyles.LoginBoxLabel} for="usuario"> Usuario </label>
         <input name="username" value={username} onChange={handleUsername} className={logintStyles.LoginBoxInput} type="text" placeholder="Ingrese su nombre de usuario"/>

         <label className={logintStyles.LoginBoxLabel} for="password">Contraseña</label>
         <input name="password" value={password} onChange={handlePassword} className={logintStyles.LoginBoxInput} type="password" placeholder="Ingrese su contraseña"/>

         <input onClick= {handleApi} className={logintStyles.LoginBoxButton} type="submit" value="Iniciar sesión"/>
        </form>

        </div>
        </>
    )
}