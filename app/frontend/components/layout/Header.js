import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#">Главная</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Создать контакт</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
