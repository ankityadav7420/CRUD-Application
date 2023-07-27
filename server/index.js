const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors'); 


app.use(express.json());
app.use(cors());

function generateUniqueId() {
  return Math.floor(Math.random() * 1000);
}

app.get('/api/posts', (req, res) => {
  const rawData = fs.readFileSync('data.json');
  const posts = JSON.parse(rawData);
  res.json(posts);
});

//creatre data
app.post('/api/posts', (req, res) => {
  const rawData = fs.readFileSync('data.json');
  const posts = JSON.parse(rawData);
  const newPost = req.body;
  newPost.userId = generateUniqueId();
  posts.push(newPost);
  fs.writeFileSync('data.json', JSON.stringify(posts));
  res.json(newPost);
});

//update a post
app.put('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const updatedPost = req.body;
  const rawData = fs.readFileSync('data.json');
  const posts = JSON.parse(rawData);
  const postIndex = posts.findIndex((post) => post.userId === postId);
  if (postIndex !== -1) {
    posts[postIndex] = { ...posts[postIndex], ...updatedPost };
    fs.writeFileSync('data.json', JSON.stringify(posts));
    res.json(posts[postIndex]);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

// Endpoint to delete a post
app.delete('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const rawData = fs.readFileSync('data.json');
  const posts = JSON.parse(rawData);
  const postIndex = posts.findIndex((post) => post.userId === postId);

  if (postIndex !== -1) {
    const filteredPosts = posts.filter((post) => post.userId !== postId);
    fs.writeFileSync('data.json', JSON.stringify(filteredPosts));
    res.sendStatus(204); 
   
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

//if you are updating port number so make sure to update the apiURL in frontent App.js file
const PORT = 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
