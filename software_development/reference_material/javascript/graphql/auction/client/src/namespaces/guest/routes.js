import React from 'react';
import { Route } from 'react-router-dom';
import Container from './container';

export default () => (
  <Route path="/guest" component={Container} />
);
