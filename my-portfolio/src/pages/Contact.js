import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './Contact.css';


function Contact() {

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    access_key: 'e60801c3-6aac-4656-8f05-556b65a184a0'
  })

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
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
          phone: '',
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

      <div className="contact-items">

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

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control name='phone'
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="123-45-678" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control name='message'
            value={formData.message}
            onChange={handleChange}
            as="textarea" rows={4} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {success && <p className='success'>Form Submitted Successfully!</p>}

      <section>

        <p>
          You can also reach me through any of the following below:
          </p>
        <p>
          Email: <a href='mailto:abledev93@gmail.com'>abledev93@gmail.com</a>
        </p>
        <p>
          Linkedin: <a href="https://www.linkedin.com/in/abelegbele/">
            <img src={Linkedin} width='30px' alt="linkedin icon" />
          </a>
        </p>
        <p>
          GitHub: <a href="https://github.com/able24">
            <img src={Github} width='30px' alt="linkedin icon" />
          </a>
        </p>
      </section>


      <Footer />

      </div>

    </>
  );
}

export default Contact;