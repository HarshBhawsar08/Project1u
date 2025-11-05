import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import ProtectedRoute from './components/ProtectedRoute';
import Logout from './components/Logout';

import AdminLayout from './Admin/AdminLayout';
import AdminNavbar from './Admin/AdminNavbar';
import AdminLogin from './Admin/AdminLogin';
import AdminUsers from './Admin/AdminUsers';
import AdminLogout from './Admin/AdminLogout';
import AdminProtectedRoute from './Admin/AdminProtectedRoute';
import AdminDashboard from './Admin/AdminDashboard';

import Anatomy from './Datas/Anatomy';
import Biochemistry from './Datas/Biochemistry';
// import Navi from './Datas/Navi';



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ---------- User Layout ---------- */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />


          <Route
            path="user"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
        </Route>



        {/* ---------- Admin Layout ---------- */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminProtectedRoute><AdminLayout /></AdminProtectedRoute>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="logout" element={<AdminLogout />} />
        </Route>


        {/* --------Datas -------- */}
        <Route path="/anatomy" element={<ProtectedRoute><Anatomy /></ProtectedRoute>} />
        <Route path='/Biochemistry' element={<ProtectedRoute><Biochemistry/></ProtectedRoute>} />
         {/* <Route path='/navi' element={<ProtectedRoute><Navi /></ProtectedRoute>} /> */}


        {/* // ---------- Fallback Route ---------- */}
        <Route path="*" element={<Login />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
