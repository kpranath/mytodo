import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';

export default () => {
  return (
    <div>
      <header style={headerStyle}>
        <Row>
          <h1>ToDo List</h1>
          <Link style={linkStyle} to="/">Home</Link>  
          <Link style={linkStyle} to="/about">About</Link>
        </Row>
      </header>
    </div>
  )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
  color: '#fff',
}
