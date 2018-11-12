import express from 'express';
import config from './config';

const app = express(); // initialize app

app.use(express.static('public')); // use express static middleware to serve the public directory
app.set('view engine', 'ejs'); // set view engine

app.get('/', (req, res) => {
  res.render('index', { answer: 2000 }); // you can pass here variables
});

app.listen(config.port, function listenHandler() {
  console.info(`App running on port ${config.port}`);
}); // listen to a port to start the app (put in config instead of hard coding it)