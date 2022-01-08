import React, { useState, useEffect } from 'react';
import { AllBlogs } from './FetchBlogs';

const BlogCategory = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await AllBlogs();
        // console.log(data.data);
        setBlogs(data.data.slice(0, 2));
      } catch (e) {
        console.warn(e);
      }
    })(); // async closed
  }, []);

  if (blogs === null) {
    return <div>Loading.......</div>;
  }
  return (
    <div>
      I am list of Blog Catrgory
      <br />
      <br />
      <article>
        <div>All Posts</div>
        {blogs.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.body.substring(0, 100)}...</p>
            <hr />
          </div>
        ))}
      </article>
    </div>
  );
};
export default BlogCategory;
