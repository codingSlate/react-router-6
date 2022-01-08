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
import Products from './Products';
import ProdCategory from './ProdCategory';
import Admin from './Admin';
import ProdPlaces from './ProdPlaces';
import Blog from './blog/Blog';

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
          <NavLink to="/blog/:first">FirstBlog</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>
        <br></br>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products />}>
            <Route path="/products" element={<ProdCategory />} />
            <Route path="/products/:id" element={<ProdPlaces />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
