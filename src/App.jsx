import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute'; 
import Logout from './components/Logout';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='logout' element={<Logout />} />
          <Route path='user' element={<ProtectedRoute><User /></ProtectedRoute>} />
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
