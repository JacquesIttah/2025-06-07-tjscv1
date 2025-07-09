import React from "react";
import { Navbar as Nvb, Container, Nav } from "react-bootstrap";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.js";
const Navbar: React.FC<object> = () => {
  return (
    <Nvb bg="primary" data-bs-theme="dark">
      <Container>
        <Nvb.Brand href="#home">Home</Nvb.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Thumbnail</Nav.Link>
          <Nav.Link href="#features">New</Nav.Link>
          <Nav.Link href="#pricing">Edit/0</Nav.Link>
        </Nav>
      </Container>
    </Nvb>
  );
};

export default Navbar;
