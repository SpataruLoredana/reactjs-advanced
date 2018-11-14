import React from 'react';
import ReactDOM from 'react-dom'; // because we interfere with the browser here

import App from '../components/App';

ReactDOM.render(<App initialData={window.initialData} />, document.getElementById('root'));