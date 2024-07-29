// src/App.js
import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css';

const App = () => {
  const firstName = "Myra :)"; // Replace with your first name or leave it empty for "Hello, there!"

  return (
    <div className="container mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="mt-3">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="https://img.freepik.com/premium-vector/afro-woman-icon-illustration-design-template_19104-449.jpg?w=740" alt="Hello" className="hello-image" />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </div>
  );
};

export default App;
