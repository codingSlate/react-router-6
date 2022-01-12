import React, { useState } from 'react';
import './style.css';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
  Link
} from 'react-router-dom';
import Home from './Home';
import BlogPage from './BlogPage';
import BlogCategory from './BlogCategory';
import Admin from './Admin';
import SinglePost from './SinglePost';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

export default function App() {
  const [isAuth, setAutuh] = useState(false);

  const authHandler = (v) => {
    console.log('result ', v);
  };
  return (
    <div>
      <BrowserRouter>
        <h1>React Router 6</h1>
        <nav>
          <NavLink  to="/" end>
            Home
          </NavLink>
          <NavLink  to="/blog">
            Blog
          </NavLink>
          <Link  to="/login">
            Login
          </Link>
        </nav>

        <br></br>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" element={<BlogPage />}>
            <Route path="/blog" element={<BlogCategory />} />
            <Route path="/blog/:id" element={<SinglePost />} />
          </Route>
          <Route path='/admin' element={<ProtectedRoute isAuth={isAuth} />} >

            </Route>
          {/* <Route path="/login"  element={<Login authFn={authHandler} />} /> */}

          <Route
            path="/*"  element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
