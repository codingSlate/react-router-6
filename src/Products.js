import React from 'react'
import { Outlet } from 'react-router-dom';

const Products = () =>{
    return(
    <div>I am products
      <Outlet />
    </div>
    )
}
export default Products