/*Importing various packages*/
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import Header from '../components/Header';
import Footer from '../components/Footer';

import './Contact.css';


function Contact() {

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    access_key: 'e60801c3-6aac-4656-8f05-556b65a184a0' /*used web3form for getting user inputs from form*/
  })

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value /*getting input from each part of the form*/
    });

  }

  const handleSubmit = (event) => {

    event.preventDefault();


    const data = JSON.stringify(formData);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: data
    })
      .then(res => res.json())
      .then(data => {
        setSuccess(true);
        setFormData({
          ...formData,
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        })

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch(err => console.log(err));

  };

  return (
    <>
      <Header />

      <Form onSubmit={handleSubmit}>
        <h1>Contact Me</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>First Name</Form.Label>
          <Form.Control name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            placeholder="Enter your first name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Enter your last name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email'
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control name='message'
            value={formData.message}
            onChange={handleChange}
            as="textarea" rows={4} />
        </Form.Group>

        <Button className='btn' variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {success && <p className='success'>Form Submitted Successfully!</p>}  {/*this appears at the bottom for 3s to confirm to users that form has been successfully submitted*/}


      <Footer />
      
    </>
  );
}

export default Contact;