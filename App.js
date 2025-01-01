


import React, { useState, useEffect } from 'react';  
import axios from 'axios';  
  
function App() {  
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const [courses, setCourses] = useState([]);  
  const [assignments, setAssignments] = useState([]);  
  
  useEffect(() => {  
   axios.get('/api/courses')  
    .then(response => {  
      setCourses(response.data);  
    })  
    .catch(error => {  
      console.error(error);  
    });  
  }, []);  
  
  useEffect(() => {  
   axios.get('/api/assignments')  
    .then(response => {  
      setAssignments(response.data);  
    })  
    .catch(error => {  
      console.error(error);  
    });  
  }, []);  
  
  const handleLogin = () => {  
   axios.post('/api/login', { username, password })  
    .then(response => {  
      if (response.data.success) {  
       setIsLoggedIn(true);  
      } else {  
       alert('Invalid username or password');  
      }  
    })  
    .catch(error => {  
      console.error(error);  
    });  
  };  
  
  const handleRegister = () => {  
   axios.post('/api/register', { username, password })  
    .then(response => {  
      if (response.data.success) {  
       setIsLoggedIn(true);  
      } else {  
       alert('Username already taken');  
      }  
    })  
    .catch(error => {  
      console.error(error);  
    });  
  };  
  
  const handleCreateCourse = () => {  
   const name = prompt('Enter course name');  
   const description = prompt('Enter course description');  
   axios.post('/api/courses', { name, description })  
    .then(response => {  
      if (response.data.success) {  
       alert('Course created successfully');  
      } else {  
       alert('Error creating course');  
      }  
    })  
    .catch(error => {  
      console.error(error);  
    });  
  };  
  
  const handleCreateAssignment = () => {  
   const name = prompt('Enter assignment name');  
   const description = prompt('Enter assignment description');  
   const dueDate = prompt('Enter assignment due date');  
   const courseId = prompt('Enter course ID');  
   axios.post('/api/assignments', { name, description, dueDate, courseId })  
    .then(response => {  
      if (response.data.success) {  
       alert('Assignment created successfully');  
      } else {  
       alert('Error creating assignment');  
      }  
    })  
    .catch(error => {  
      console.error(error);  
    });  
  };  
  
  return (  
   <div>  
    <h1>ABCscholar</h1>  
    <img src="logo.png" alt="ABCscholar Logo" />  
    <form>  
      <label>Username:</label>  
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />  
      <br />  
      <label>Password:</label>  
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />  
      <br />  
      <button type="button" onClick={handleLogin}>Login</button>  
      <button type="button" onClick={handleRegister}>Register</button>  
    </form>  
    {isLoggedIn && (  
      <div>  
       <h2>Courses</h2>  
       <ul>  
        {courses.map(course => (  
          <li key={course._id}>{course.name}</li>  
        ))}  
       </ul>  
       <button type="button" onClick={handleCreateCourse}>Create Course</button>  
       <h2>Assignments</h2>  
       <ul>  
        {assignments.map(assignment => (  
          <li key={assignment._id}>{assignment.name}</li>  
        ))}  
       </ul>  
       <button type="button" onClick={handleCreateAssignment}>Create Assignment</button>  
      </div>  
    )}  
   </div>  
  );  
}  
  
export default App;



// In the App component, we have two states: username and password. We use the useState hook to create these states. We also have a state called isLoggedIn, which is used to determine if the user is logged in or not. We use the useState hook to create this state as well.