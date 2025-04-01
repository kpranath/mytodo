import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <div>
      <header style={headerStyle}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-md-start text-center">
              <h1 style={titleStyle}>ToDo List</h1>
            </Col>
            <Col md={6} className="text-md-end text-center">
              <Link style={linkStyle} to="/" className="me-4">Home</Link>  
              <Link style={linkStyle} to="/about">About</Link>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

const headerStyle = {
    background: 'linear-gradient(135deg, #008080 0%, #20B2AA 100%)',
    color: '#fff',
    padding: '20px 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px'
}

const titleStyle = {
    fontWeight: 'bold',
    fontSize: '2.2rem',
    margin: 0,
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
}

const linkStyle = {
  color: '#fff',
  fontSize: '1.1rem',
  fontWeight: '500',
  textDecoration: 'none',
  padding: '8px 12px',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease',
  display: 'inline-block'
}
