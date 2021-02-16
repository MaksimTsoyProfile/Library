import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Books from './Books';

const StartPage = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <Books />
      </Col>
    </Row>
  </Container>
);

export default StartPage;
