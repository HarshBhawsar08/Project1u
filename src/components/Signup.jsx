import { createUserWithEmailAndPassword ,signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../Firebase';
import { addDoc, collection } from 'firebase/firestore';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db, 'users'), {
        uid: data.user.uid,
        name: name,
        email: email,
        createdAt: new Date()
      }
      );

      await signOut(auth); // signup krte hai signout hojayega taki user login kre tb data dikhe
      alert('Signup successfully');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="card col-md-5 mx-auto shadow p-4 mt-5">
      <h3 className="text-center mb-4">Sign Up</h3>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label>Full Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <button className="btn btn-success w-100" type="submit">
          Sign Up
        </button>
      </form>
      <p className="text-center mt-3">
        Already have an account?{" "}
        <a href="/login" className="text-decoration-none">Login</a>
      </p>
    </div>
  )
}

export default Signup;
