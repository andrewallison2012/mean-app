const express = require('express');
const router = express.Router();

// load mongoose package
var mongoose = require('mongoose');
// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose.connect('mongodb://localhost/todo-api')
  .then(() =>  console.log('MongoDB connection succesful'))
  .catch((err) => console.error(err));
var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Todo', TodoSchema);


// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
const MONGDB = 'http://127.0.0.1:28017';

// GET api listing.
router.get('/', (req, res) => {
  res.send('welcome to the API ');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});
router.get('/todo-api', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${MONGDB}/todo-api/todos/`)
    .then(todos => {
      res.status(200).json(todos.data);
      console.log('todos api works');
    })
    .catch(error => {
      res.status(500).send(error)
       console.log('todos error api works');
    });
});
router.get('/meanapp-dev', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${MONGDB}/meanapp-dev/things/`)
    .then(todos => {
      res.status(200).json(todos.data);
      console.log('todos 2api works');
    })
    .catch(error => {
      res.status(500).send(error)
       console.log('todos 2error api works');
    });
});

module.exports = router;