import React, { useState } from "react";
import { Navbar, Container, Form, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  SlGrid,
  SlScreenDesktop,
  SlUser,
  SlPeople,
  SlSettings,
  SlLogout,
} from "react-icons/sl";
import {useDispatch} from 'react-redux'
import {updateAuthenticationState} from '../../store/authentication'

export const NavbarMenu = () => {

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
      <Navbar className="Navbar fixed-bottom" >
        <div className="container-fluid">
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="ma-auto Nav">
            <Nav.Link className="navLink me-3" href="/dashboard">
              <SlUser />
            </Nav.Link>
            <Nav.Link className="navLink mx-3" href="/estaciones">
              <SlScreenDesktop />
            </Nav.Link>
            <Nav.Link className="navLink mx-3" href="/reporte">
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
            <Nav.Link className="navLink mx-3">
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
