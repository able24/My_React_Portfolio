import {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './Contact.css';

function Contact() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  }

const handleSubmit = (event) => {

  event.preventDefault();

  console.log(formData);

}

  return (
    <>
      <Header />

      <Form onSubmit = {handleSubmit}>
        <h1>Contact Me</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>First Name</Form.Label>
          <Form.Control name='firstName' onChange = {handleChange} type="text" placeholder="Enter your first name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control name='lastName' onChange = {handleChange} type="text" placeholder="Enter your last name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' onChange = {handleChange} type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control name='phone' onChange = {handleChange} type="tel" placeholder="123-45-678" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control name='message' onChange = {handleChange} as="textarea" rows={4} />
      </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>


      <Footer />

    </>
  );
}

export default Contact;