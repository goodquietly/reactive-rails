import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const ContactItem = ({ name, email }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>{name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{email}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ContactItem;
