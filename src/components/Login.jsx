import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'; 

function Login() {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
        await signInWithEmailAndPassword(auth , email , password);
        alert(`Login successful!`);
        navigate('/user');

        }catch(error){
          alert('Please enter your correct passord.. !');
        }
    };  
                   
  return (
    <div className="card col-md-5 mx-auto shadow p-4 mt-5">
      <h3 className="text-center mb-4">Login</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
      </form>

       <p className="text-center mt-3">
        Don’t have an account?{" "}
        <a href="/signup" className="text-decoration-none">Sign up</a>
      </p>
      
    </div>
  )
}

export default Login;
