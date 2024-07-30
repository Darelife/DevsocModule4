import React from 'react';
import axios from 'axios';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const username = data.get('username');
    const password = data.get('password');
    
//     i want the username and password to go in the body
    axios.post('http://localhost:4030/api/auth/login',{username, password})
    .then(response => {console.log('Response:', response.data);
  })
  .catch(error => {console.error('Error:', error);
  });

  };

  return (
       <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
        </label>
        <input type="text"
               id="username" 
               name="username"
               placeholder="Enter your Username" required>
        </input>

        <label htmlFor="password">
          Password:
        </label>
        <input type="password"
               id="password" 
               name="password"
               placeholder="Enter your Password" required>
        </input>

        <div className="wrap">
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
      <p>Not registered?
        <a href="#">
          Create an account
        </a>
      </p>
    </div>
  );
};

export default Login;