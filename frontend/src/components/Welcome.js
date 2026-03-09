import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

const welcomeStyle = {
  backgroundColor: '#eeeeee',
};

const Welcome = () => (
  <Container style={welcomeStyle}>
    <Row>
      <Col>
        <h1>Images Gallery</h1>
        <p>
          This is a simple application that retrieves photos using Unsplash API.
          In order to start enter any search term in the input field.
        </p>
        <p>
          <Button variant="primary" href="https://unsplash.com" target="_blank">
            Learn more
          </Button>
        </p>
      </Col>
    </Row>
  </Container>
);

export default Welcome;
