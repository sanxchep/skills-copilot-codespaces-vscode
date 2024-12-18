// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use body-parser to parse the request body
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Use the comments.js module
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
  const allComments = comments.getAllComments();
  res.json(allComments);
});

// Get comments by user
app.get('/comments/:user', (req, res) => {
  const user = req.params.user;
  const userComments = comments.getCommentsByUser(user);
  res.json(userComments);
});

// Add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.addComment(comment);
  res.json(comment);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});