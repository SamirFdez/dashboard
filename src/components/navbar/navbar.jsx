import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  SlGrid,
  SlScreenDesktop,
  SlUser,
  SlPeople,
  SlSettings,
  SlLogout,
} from "react-icons/sl";
import { useDispatch } from "react-redux";
import { updateAuthenticationState } from "../../store/authentication";

export const NavbarMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOutUser = () => {
    Swal.fire({
      title: "¿Estás seguro de cerrar sesión?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Cerrar Sesión",
    }).then((cerrarSesion) => {
      if (cerrarSesion.isConfirmed) {
        navigate("/");
        dispatch(updateAuthenticationState(false));
        sessionStorage.removeItem("nombre");
      }
    });
  };

  const goDashboard = () => {
    navigate("/dashboard");
  };

  const goEstaciones = () => {
    navigate("/estaciones");
  };

  const goReporte = () => {
    navigate("/reporte");
  };

  const goConfiguracion = () => {
    Swal.fire({
      icon: "info",
      // title: "¿Cuál es tu nombre?",
      text: "Ingrese la clave para continuar a esta sección",
      input: "password",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ingresar",
      cancelButtonText: "Cancelar",    }).then((result) => {
      if (result.value === "1414") {
        navigate("/configuracion");
      } else {
        navigate("/dashboard");
      }
    });
  };

  return (
    <>
      <div style={{ height: "50px" }}></div>
      <Navbar className="Navbar fixed-bottom">
        <div className="container-fluid">
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="ma-auto Nav">
            <Nav.Link className="navLink me-3" onClick={goDashboard}>
              <SlUser />
            </Nav.Link>
            <Nav.Link className="navLink mx-3" onClick={goEstaciones}>
              <SlScreenDesktop />
            </Nav.Link>
            <Nav.Link className="navLink mx-3" onClick={goReporte}>
              <SlPeople />
            </Nav.Link>

            {/* <NavDropdown
                title={<SlUser />}
                id="navDropDown"
                className="dropup"
                data-bs-theme="dark"
              >
                <NavDropdown.Item className="dropDownItem">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item className="dropDownItem">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item className="dropDownItem">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="dropDownItem">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
          {/* </Navbar.Collapse> */}
          <Navbar.Brand className="NavbarBrand">
            ESTATUS GESTION DE COLA
          </Navbar.Brand>

          <Nav className="ma-auto">
            <Nav.Link className="navLink mx-3" onClick={goConfiguracion}>
              <SlSettings />
            </Nav.Link>
            <Nav.Link className="navLink mx-3" onClick={handleLogOutUser}>
              <SlLogout />
            </Nav.Link>
          </Nav>

          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form> */}

          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        </div>
      </Navbar>
    </>
  );
};
