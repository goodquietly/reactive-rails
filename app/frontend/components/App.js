import React, { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import './i18n';
import './App.scss';

import Header from './layout/Header';
import Contacts from './contacts/Contacts';
import AddContact from './contacts/AddContact';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Row>
          <AddContact />
        </Row>
      </Container>
    </Fragment>
  );
};

export default App;
