import React, { useState } from "react";
import {
  Navbar,
  Container,
  Form,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import {
  SlGrid,
  SlScreenDesktop,
  SlUser,
  SlPeople,
  SlSettings,
  SlLogout,
} from "react-icons/sl";

export const NavbarMenu = () => {
  const [offset, setOffset] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const closeNav = () => {
    setExpanded(false);
  };

  const handleNavLinkClick = (sectionId) => {
    closeNav();
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 60;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setOffset(offsetTop);
    }
  };
  return (
    <>
      <Navbar className="Navbar fixed-bottom" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ma-auto">
                <Nav.Link className="navLink mx-3">
                  <SlUser/>
                </Nav.Link>
                <Nav.Link className="navLink mx-3">
                  <SlScreenDesktop/>
                </Nav.Link>
                <Nav.Link className="navLink mx-3">
                  <SlUser/>
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
          </Navbar.Collapse>
          <Navbar.Brand className="NavbarBrand">
            ESTATUS GESTION DE COLA
          </Navbar.Brand>

          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form> */}

          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        </Container>
      </Navbar>
    </>
  );
};
