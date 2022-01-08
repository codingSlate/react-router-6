import React from 'react'
import { Outlet } from 'react-router-dom';

const BlogPage = () =>{
    return(
    <div>I am Blog Page
      <Outlet />
    </div>
    )
}
export default BlogPage