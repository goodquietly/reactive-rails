import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const AddContact = () => {
  const { t, i18n } = useTranslation('common');

  const [contact, setContact] = useState({ name: '', email: '' });

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      contact: contact,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').content,
      },
    };

    const { data } = await axios.post('api/v1/contacts', formData, config);

    console.log(data);
  };

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="name" className="my-3 col-4">
        <Form.Label>{t('contact.name')}</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder={t('forms.placeholders.name')}
          onChange={onChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="email" className="my-3 col-4">
        <Form.Label>{t('contact.email')}</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder={t('forms.placeholders.email')}
          onChange={onChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="my-3">
        {t('forms.submit')}
      </Button>
    </Form>
  );
};

export default AddContact;
