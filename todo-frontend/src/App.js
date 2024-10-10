import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskList from './TaskList';
import AddTask from './AddTask';
//import RemoveTask from './RemoveTask';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Task List</Link></li>
            <li><Link to="/add-task">Add Task</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
