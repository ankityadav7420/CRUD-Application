import React, { useState } from 'react';

const PostForm = ({ handleCreate }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: title,
      body: body,
    };
    handleCreate(newPost);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="my-3 d-flex justify-content-center">
      <div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="body" className="form-label">Body:</label>
          <input
            type="textarea"
            id="body"
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
          <label className="form-label">
          <button type="submit" className="btn btn-primary ml-4 mt-4">Create Data</button>
          </label>
        </div>
      </div>
     
    </form>
  );
};

export default PostForm;
