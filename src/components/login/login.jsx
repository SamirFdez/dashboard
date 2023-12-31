import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { updateAuthenticationState } from "../../store/authentication";
import { useNavigate } from "react-router-dom";

export const LoginForm = function () {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const loginProc = import.meta.env.VITE_APP_API_LOGIN;
  const ApiKey = import.meta.env.VITE_APP_APIKEY;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const config = {
    headers: {
      "Content-Type": "application/json",
      APIKey: ApiKey,
    },
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const noRecargarPagina = (e) => {
    e.preventDefault();
  };

  const completeFields = () => {
    Swal.fire({
      icon: "info",
      title: "",
      text: "Completa todos los campos para continuar",
    });
  };

  const loadingUser = () => {
    Swal.fire({
      title: "Iniciando Sesión...",
      didOpen: () => {
        Swal.showLoading()
      },
    });
  };

  const invalidUser = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El nombre de usuario y la contraseña no coinciden",
    });
    setUsername("");
    setPassword("");
  };

  const logIn = async () => {
    try {
      if (username.length === 0 || password.length === 0) {
        completeFields();
        return;
      }

      loadingUser();
      const response = await axios.get(
        baseUrl + `${loginProc}@Username=${username},@Password=${password}`,
        config
      );
      if (response.data[0]) {
        setLogin(response.data[0]);
        navigate("/dashboard");
        sessionStorage.setItem("nombre", response.data[0].Nombre);
        dispatch(updateAuthenticationState(true));
        Swal.close();
        return;
      }
      
      Swal.close();
      invalidUser();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="LoginBox">
        <img
          className="LoginBoxLogo"
          src="data:image/png;base64,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"
          alt="Logo"
        />
        <h1 className="LoginBoxH1"> Iniciar Sesión </h1>

        <form onSubmit={noRecargarPagina} autoComplete="off">
          <label className="LoginBoxLabel" htmlFor="username">
            Usuario
          </label>
          <input
            name="username"
            value={username}
            onChange={handleUsername}
            className="LoginBoxInput"
            type="text"
            placeholder="Ingrese su nombre de usuario"
          />

          <label className="LoginBoxLabel" htmlFor="password">
            Contraseña
          </label>
          <input
            name="password"
            value={password}
            onChange={handlePassword}
            className="LoginBoxInput"
            type="password"
            placeholder="Ingrese su contraseña"
          />

          <input
            onClick={logIn}
            className="LoginBoxButton"
            type="submit"
            value="Iniciar sesión"
          />
        </form>
      </div>
    </>
  );
};
