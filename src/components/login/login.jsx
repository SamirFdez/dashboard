import { useState } from 'react'
import logintStyles from './login.module.css'
import Logo from '../../assets/img/user.png';
import swal from 'sweetalert';
import axios from 'axios';

export const LoginForm = function() {

    const url = "https://service.laserbluforms.signos-framework.com/GenericWeb?proctoken=spLoginUser&ProcParams=@Username='{login.Usuario}',@Password='{login.Clave}'";

    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleApi = () => {
        axios.get(url, {
            params: {
                username: username, 
                password: password
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    }


    const noRecargarPagina = (e) => {
        e.preventDefault();
    }


    // const loginValidation = function(){
    //     if(userLogin.username === "" || userLogin.password === "") {
    //         swal({
    //             title: "ERROR",
    //             text: "Completa todos los campos para iniciar sesión.",
    //             icon: "info",
    //           });
    //     }
    // }
    return (
        <>
         <div className={logintStyles.LoginBox}>
         <img className={logintStyles.LoginBoxLogo} src={Logo} alt="Logo"/> 
         <h1 className={logintStyles.LoginBoxH1}>Iniciar Sesión</h1>   

         <form onSubmit={noRecargarPagina} method='' >
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