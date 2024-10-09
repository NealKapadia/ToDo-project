# README for Simple Full-Stack To-Do List Application

## Project Overview

This is a simple full-stack application using a **Python Flask** backend for handling API requests and a **React** frontend for displaying a basic to-do list. The app allows users to:

1. View a list of tasks
2. Add a new task
3. Seamlessly navigate between the two sections

The design is minimal, making it easy to extend and innovate with new ideas.

## Project Structure

```
/backend                # Python Flask backend folder
    app.py              # Flask app with API endpoints
    venv/               # Python virtual environment
/frontend               # React frontend folder
    src/
        App.js          # Main React component with routing
        TaskList.js     # Task list component
        AddTask.js      # Add task form component
    public/
    package.json        # React app configurations
README.md               # This README file
```

## Prerequisites

- Python 3.x
- Node.js & npm
- Flask
- React

## Setup Instructions

### Backend (Flask):

1. Navigate to the **backend** folder:
   ```
   cd backend
   ```

2. Create and activate a virtual environment:
   ```
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install the necessary dependencies:
   ```
   pip install Flask Flask-CORS
   ```

4. Run the Flask server:
   ```
   python app.py
   ```

### Frontend (React):

1. Navigate to the **frontend** folder:
   ```
   cd todo-frontend
   ```

2. Install the necessary npm dependencies:
   ```
   npm install
   ```

3. Start the React app:
   ```
   npm start
   ```

The React app will run on `http://localhost:3000`, and the Flask backend on `http://localhost:5000`. The React app uses a proxy to communicate with the Flask API.

## Features

- **Task List**: Displays all tasks retrieved from the Flask API
- **Add Task**: Allows users to add a new task to the list

## API Endpoints

- **GET /tasks**: Retrieves the list of tasks
- **POST /tasks**: Adds a new task to the list

## Example Usage

1. Navigate to `http://localhost:3000`
2. View the list of tasks on the main screen
3. Use the "Add Task" link to navigate to the form, then add new tasks

## Future Enhancements

- Edit tasks
- Mark tasks as completed
- Delete tasks
- Add database support (e.g., SQLite, PostgreSQL)

Feel free to modify and extend this application as needed!