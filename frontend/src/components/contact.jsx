import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <p className="fs-5 text-justify">
            <strong>Pet Mate</strong> is a premier service company dedicated to
            providing exceptional services tailored to cat and dog owners. From
            breed-based matchmaking to professional care and support, we are
            committed to ensuring the well-being of your beloved pets. Whether
            you’re looking for the perfect match, grooming solutions, or pet
            care advice, Pet Mate is here to assist you at every step with
            trust, love, and expertise. <br /><br />
            Our vision is to build a community where pet companionship becomes
            even more rewarding through services that are compassionate,
            well-informed, and accessible to all. Your pet’s happiness is our
            highest priority, and we aim to deliver that with a touch of love
            and innovation.
          </p>

          <p className="mt-4 fw-semibold text-center">
            For any complaints, queries, or requests – feel free to reach out to
            us using the form below.
          </p>
        </Col>
      </Row>

      <h2 className="text-center mb-4 text-primary fw-bold">Contact Us</h2>

      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Type your message..."
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
