import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormApi from './FormApi';

const StartPage = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <FormApi />
      </Col>
    </Row>
  </Container>
);

export default StartPage;
