import React from 'react';
import { render } from 'react-dom';
import App from './app';
import store from './app/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  render(<App store={store} />, root);
});
