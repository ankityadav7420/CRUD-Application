import React, { useState } from 'react';

const PostTable = ({ postss, handleUpdate, handleDelete }) => {
  const [editMode, setEditMode] = useState({});
  const [newTitle, setNewTitle] = useState({});
  const [newBody, setNewBody] = useState({});

  const handleEdit = (postId, title, body) => {
    setNewTitle(title);
    setNewBody(body);
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [postId]: true,
    }));
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {postss.map((post) => (
          <tr key={post.userId}>
            <td>{post.userId}</td>
            {editMode[post.userId] ? (
              <>
                <td>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={newBody}
                    onChange={(e) => setNewBody(e.target.value)}
                    className="form-control"
                  />
                </td>
                <td>
                  <button
                    onClick={() => (handleUpdate(post.userId, newTitle, newBody), setEditMode(false))}
                    className="btn btn-success"
                  >
                    Final Update
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    onClick={() => handleEdit(post.userId, post.title, post.body)}
                    className="btn btn-warning mx-4"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(post.userId)}
                    className="btn btn-danger mx-4"
                  >
                    Delete
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
