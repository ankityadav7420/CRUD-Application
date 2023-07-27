import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostTable from './components/PostTable';
import PostForm from './components/PostForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
const App = () => {
  const [posts, setPosts] = useState([]);
  const [editMode, setEditMode] = useState({});

  //API URL
  //if you are updating port number in backend so make sure to update the apiURL
  const apiURL = "http://localhost:3001/api"
  
  useEffect(() => {
    fetchData();
  }, []);

  //Get Data
  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiURL}/posts`);
      const allPosts = response.data;
      setPosts(allPosts)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // post data
const handleCreate = async (newPost) => {
  try {
    const response = await axios.post(`${apiURL}/posts`, newPost);
    const allPosts = response.data;
    alert(`New post Created succesfully`)
    fetchData()
  } catch (error) {
    console.error('Error creating post:', error);
  }
};

// update data
const handleUpdate = async (postId, newTitle, newBody) => {
  try {
    const updatedPostIndex = posts.findIndex((post) => post.userId === postId);
    const updatedPost = { ...posts[updatedPostIndex], title: newTitle, body: newBody };
    await axios.put(`${apiURL}/posts/${postId}`, updatedPost);
    const updatedPosts = [...posts];
    updatedPosts[updatedPostIndex] = updatedPost;
    fetchData();
    alert(`Post having id ${postId} updated`);
  } catch (error) {
    console.error('Error updating post:', error);
  }
};

// delete data
const handleDelete = async (postId) => {
  console.log("postId frontend",postId)
  try {
    await axios.delete(`${apiURL}/posts/${postId}`);
    alert(`post having id ${postId} deleted`)
    fetchData()
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};

  return (
    <div>
      <h1>CRUD Application</h1>
      <h5>from Data.json file</h5>
      <p>see readme.md file if any issue</p>

      <PostForm handleCreate={handleCreate} />
      <PostTable
        postss={posts}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
