import React from "react";
import styles from "./Navbar.module.css";
import { Navbar as Nvb } from "react-bootstrap";
import { Container, Nav } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.js";

const Navbar: React.FC<object> = () => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <Nvb bg="primary" data-bs-theme="dark">
        <Container>
          <Nvb.Brand href="#home">Home</Nvb.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">New</Nav.Link>
            <Nav.Link href="#features">List</Nav.Link>
            <Nav.Link href="#pricing">edit/1</Nav.Link>
          </Nav>
        </Container>
      </Nvb>
    </div>
  );
};

export default Navbar;
