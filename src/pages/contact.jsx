import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { Header } from "../Components/Header";
import { Copyrights } from "../Components/Copyrights";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Header />
      <div style={{ padding: "80px 0", backgroundColor: "#f9f9f9" }}>
        <Container>
          <h1 className="mb-4 text-center">Contact Us</h1>
          <p className="text-center mb-5">Have questions or feedback? We'd love to hear from you!</p>
          
          <Row className="justify-content-center">
            <Col md={8}>
              {formStatus.submitted && (
                <Alert variant={formStatus.success ? 'success' : 'danger'}>
                  {formStatus.message}
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-sm">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name *</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>
                
                <div className="d-grid">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    style={{ 
                      backgroundColor: "#615349", 
                      border: "2px solid #000000",
                      fontWeight: "bold"
                    }}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Form>
              
              <div className="text-center mt-5">
                <h3 className="mb-3">Alternative Contact Methods</h3>
                <p className="mb-1"><strong>Email:</strong> support@swamptoken.com</p>
                <p><strong>Telegram:</strong> @SwampTokenSupport</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Copyrights />
    </>
  );
};

export default ContactUs;