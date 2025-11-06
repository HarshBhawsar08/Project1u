import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../Firebase';
import { signOut } from 'firebase/auth';

function Navbar() {
   const [currentUser, setCurrentUser] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
         setCurrentUser(user);
      });
      return () => unsubscribe();
   }, []);

   const handleLogout = async () => {
      if (currentUser) {
         await signOut(auth);
         alert('Logged out successfully!');
         navigate('/login');
      } else {
         alert('You are not logged in!');
      }
   }

   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient bg-success p-4">
         <div className="container">
            <Link className="navbar-brand" to="/">Pharmasis-App</Link>
            <div>
               <ul className="navbar-nav ms-auto">

                  {!currentUser && (
                     <>
                        <li className="nav-item">
                           <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                     </>
                  )}

                  {currentUser && (
                     <>
                        <li className="nav-item">
                           <Link className="nav-link" to="/user">User</Link>
                        </li>
                        <li className="nav-item">
                           <button
                              className="btn btn-link nav-link"
                              onClick={handleLogout}
                              style={{ textDecoration: 'none' }}
                           >
                              Logout
                           </button>
                        </li>
                     </>
                  )}

               </ul>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
