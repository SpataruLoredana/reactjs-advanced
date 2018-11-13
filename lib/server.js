import express from 'express';
import config from './config';
import serverRender from './renderers/server';

import { data } from './testData';

const app = express(); // initialize app

app.use(express.static('public')); // use express static middleware to serve the public directory
app.set('view engine', 'ejs'); // set view engine

app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index', { initialContent }); // you can pass here variables
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, function listenHandler() {
  console.info(`App running on port ${config.port}`);
}); // listen to a port to start the app (put in config instead of hard coding it)