import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './i18n';
import './App.scss';

import Header from './layout/Header';
import NotFound from './layout/NotFound';
import Contacts from './contacts/Contacts';
import AddContact from './contacts/AddContact';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Contacts />} />
              <Route path="/add_contact" element={<AddContact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
