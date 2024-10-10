import React, { useState } from 'react';
import axios from 'axios';

function RemoveTask({ history }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:5000/tasks', { title })
      .then(response => {
        history.push('/');
      })
      .catch(error => {
        console.error('There was an error removing the task!', error);
      });
  };

  return (
    <div>
      <h1>Remove a Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          required
        />
        <button type="submit">Remove Task</button>
      </form>
    </div>
  );
}

export default RemoveTask;
