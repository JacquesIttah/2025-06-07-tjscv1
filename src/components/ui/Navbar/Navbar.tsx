import React from "react";
import styles from "./Navbar.module.css";
import { Navbar as Nvb } from "react-bootstrap";
import { Container, Nav } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";

const Navbar: React.FC<object> = () => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <Nvb bg="primary" data-bs-theme="dark">
        <Container>
          <Nvb.Brand as={Link} to="/">Home</Nvb.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/editor'}>New</Nav.Link>
            <Nav.Link as={Link} to={'/editor/0'}>edito 0</Nav.Link>
            <Nav.Link as={Link} to={'/thumbnail'}>list</Nav.Link>
          </Nav>
        </Container>
      </Nvb>
    </div>
  );
};

export default Navbar;
