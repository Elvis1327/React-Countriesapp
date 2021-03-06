import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './App';
import './styles/styles.scss';
import { store } from './store/store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

