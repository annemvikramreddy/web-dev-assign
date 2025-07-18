import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Media from './pages/Media';
import Profile from './pages/Profile';
import { AuthContext } from './context/AuthContext.jsx';

const App = () => {
  const { isAuthenticated } = React.useContext(AuthContext);

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route
          path="/dashboard"
          element={<Layout><Navigate to="/dashboard/posts" replace /></Layout>}
        />
        <Route path="/dashboard/posts" element={<Layout><Posts /></Layout>} />
        <Route path="/dashboard/users" element={<Layout><Users /></Layout>} />
        <Route path="/dashboard/media" element={<Layout><Media /></Layout>} />
        <Route path="/dashboard/profile" element={<Layout><Profile /></Layout>} />
      </Route>
      <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />
    </Routes>
  );
};

export default App;

