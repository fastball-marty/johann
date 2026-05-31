import React, { useState } from 'react';
import "../styles/styles.css";
 
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
 
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Username:', username, 'Password:', password);
    };
 
    return (
      <>
        <form id="login-box" onSubmit={handleSubmit}>
          <input
            className="login-row"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-row"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign in</button>

          <i className="register-text" onClick={() => console.log('register')}><u>New here? Click to register.</u></i>
        </form>
      </>
      
    );
};
 
export default Login;