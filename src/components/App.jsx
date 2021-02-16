import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import StartPage from './StartPage';

const App = () => (
  <Router>
    <Container>
      <Nav />
        <Switch>
          <Route path='/' exact component={StartPage}/>
        </Switch>
    </Container>
  </Router>
);

export default App;
