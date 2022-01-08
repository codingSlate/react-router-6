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
import Blog from './Blog';
import BlogCategory from './BlogCategory';
import Admin from './Admin';
import SinglePostPage from './SinglePostPage';
import BlogPage from './blog/BlogPage';

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
            <Route path="/blog/:id" element={<SinglePostPage />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
