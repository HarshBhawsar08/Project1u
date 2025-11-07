import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const adminRef = doc(db, 'admins', user.uid);
      const adminSnap = await getDoc(adminRef);

      if (adminSnap.exists()) {
        localStorage.setItem('isAdmin', 'true');
        alert('Admin login successful!');
        navigate('/admin/dashboard');
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert('Invalid credentials or admin not found.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
      
        <div className="card col-11 col-sm-8 col-md-6 col-lg-5 mx-auto shadow p-4 mt-5">
          <h3 className="text-center mb-4">Admin Login</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter admin email"
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
                placeholder="Enter admin password"
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
            Only authorized admins can log in.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
