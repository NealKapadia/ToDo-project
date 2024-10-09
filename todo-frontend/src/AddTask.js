import React, { useState } from 'react';
import axios from 'axios';

function AddTask({ history }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/tasks', { title })
      .then(response => {
        history.push('/');
      })
      .catch(error => {
        console.error('There was an error adding the task!', error);
      });
  };

  return (
    <div>
      <h1>Add a New Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
