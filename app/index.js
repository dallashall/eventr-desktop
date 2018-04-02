import React from 'react';
import { Provider } from 'react-redux';
import Container from './components/container';

export default ({ store }) => (
  <Provider store={store}>
    <Container />
  </Provider>
);
