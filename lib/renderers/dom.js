import React from 'react';
import ReactDOM from 'react-dom'; // because we interfere with the browser here

import App from '../components/App';
import StateApi from '../StateApi';

const store = new StateApi(window.initialData);

ReactDOM.render(
  <App store={store} />, 
  document.getElementById('root')
);