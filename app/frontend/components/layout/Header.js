import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">{t('navi.main')}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/add_contact">{t('navi.create_contact')}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
