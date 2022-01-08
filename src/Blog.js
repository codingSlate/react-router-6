import React from 'react'
import { Outlet } from 'react-router-dom';

const Blog = () =>{
    return(
    <div>I am Blog Page
      <Outlet />
    </div>
    )
}
export default Blog