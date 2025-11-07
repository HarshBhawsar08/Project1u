import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import ProtectedRoute from './components/ProtectedRoute';

import AdminLayout from './Admin/AdminLayout';
import AdminNavbar from './Admin/AdminNavbar';
import AdminLogin from './Admin/AdminLogin';
import AdminUsers from './Admin/AdminUsers';
import AdminLogout from './Admin/AdminLogout';
import AdminProtectedRoute from './Admin/AdminProtectedRoute';
import AdminDashboard from './Admin/AdminDashboard';

import Anatomy from './Datas/Anatomy';
import Biochemistry from './Datas/Biochemistry';
import Physiology from './Datas/Physiology';
// import Navi from './Datas/Navi';



function App() {
  return (
    <Routes>

      {/* ---------- User Layout ---------- */}
      <Route element={<Layout />}>
        <Route index path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route element={<ProtectedRoute />}> */}
        <Route
          path="user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        {/* </Route> */}
      </Route>

      {/* ---------- Admin Layout ---------- */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminProtectedRoute><AdminLayout /></AdminProtectedRoute>}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/logout" element={<AdminLogout />} />
      </Route>

      {/* --------Datas -------- */}
      <Route path="/anatomy" element={<ProtectedRoute><Anatomy /></ProtectedRoute>} />
      <Route path='/biochemistry' element={<ProtectedRoute><Biochemistry /></ProtectedRoute>} />
      <Route path='/physiology' element={<ProtectedRoute><Physiology /></ProtectedRoute>} />
      {/* <Route path='/navi' element={<ProtectedRoute><Navi /></ProtectedRoute>} /> */}

      {/* // ---------- Fallback Route ---------- */}
      <Route path="*" element={<Login />} />
    </Routes>

  );
}
export default App;


