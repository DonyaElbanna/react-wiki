import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";

const Navigation = ({ clearAll }) => {
  return (
    <div className="nav-bar">
      <h1 className="brand">
        Rick & Morty <span className="accent">Wiki</span>
      </h1>
      <Navbar collapseOnSelect expand="sm" variant="dark">
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav onClick={clearAll}>
            <NavLink eventKey="1" as={Link} to="/">
              Characters
            </NavLink>
            <NavLink eventKey="2" as={Link} to="/episode">
              Episodes
            </NavLink>
            <NavLink eventKey="3" as={Link} to="/location">
              Locations
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
