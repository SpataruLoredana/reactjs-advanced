import React from 'react';
import ReactDOM from 'react-dom'; // because we interfere with the browser here

import App from '../components/App';

const initialData = {
  articles: {},
  authors: {}
};

ReactDOM.render(<App initialData={initialData} />, document.getElementById('root'));