import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Swal from "sweetalert2";

// or via CommonJS
import "../styles/navbar.css";

const Navigation = (props) => {
  const Swal = require("sweetalert2");
  let expand = "xl";
  const Brand_URL = "https://legalbots.in/fixed-images/legalbots/logo.png";
  const direction = "start";

  const [activeLink, setActiveLink] = useState("EVENTS");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const onSignIn = () => {
    Swal.fire({
      title: "Sign In as a?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Applicant",
      denyButtonText: `Recruiter`,
    });
  };
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className="bg-body-tertiary mb-3 navbar_body"
      >
        <Container fluid>
          <Link className="navbar-brand item-color" to="/">
            <img src={Brand_URL} alt="brand" />
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expand}`}
                className=""
              >
                LEGALBOTS
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="off-canvas-body navbar_body">
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                {[
                  "HOME",
                  "ABOUT",
                  "JOBS",
                  "EVENTS",
                  "COURSES",
                  "EXAMS",
                  "BLOG",
                  "RECRUITER",
                  "PRICING",
                ].map((link) => (
                  <Link
                    key={link}
                    className={`nav-link text-decoration-none px-4 py-4 rounded-4 nav_txt_hov item-color ${
                      activeLink === link ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick(link)}
                  >
                    {link}
                  </Link>
                ))}
                <Link
                  className="nav-link text-decoration-none px-4 py-4 rounded-4 nav_txt_hov item-color"
                  onClick={() => handleLinkClick("CART")}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </Nav>

              <div
                className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3"
                id="signin"
              >
                <button className="signin_logo" onClick={onSignIn}>
                  <i className="fa-solid fa-user-plus"></i>
                  SIGN IN
                </button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
