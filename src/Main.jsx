import React, { Component } from 'react';
import { Container } from 'bootstrap-4-react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About'

export default class Main extends Component {
  render() {
    return (
      <Container as="main" role="main">
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={About} />
            </Switch>
       
        
      </Container>
    )
  }
}