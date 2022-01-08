import React from 'react';
import './style.css';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import Home from './Home';
import BlogPage from './BlogPage';
import BlogCategory from './BlogCategory';
import Admin from './Admin';
import SinglePost from './SinglePost';
import BlogPage from './BlogPage';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>React Router 6</h1>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>
        <br></br>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" element={<BlogPage />}>
            <Route path="/blog" element={<BlogCategory />} />
            <Route path="/blog/:id" element={<SinglePost />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
