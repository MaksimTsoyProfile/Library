import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import RegistrationForm from './RegistrationForm';

const Nav = () => (
  <Container className="logo p-0 p-2">
    <Row>
      <Col>
        <Link to='/'>
          <h4>Книгоман</h4>
        </Link>
      </Col>
      <Col>
        <SearchForm />
      </Col>
      <Col>
        <RegistrationForm />
      </Col>
    </Row>
  </Container>
);

export default Nav;
