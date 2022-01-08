import React, { useState, useEffect } from 'react';
import { AllBlogs } from './BlogFetch';

const ProdCategory = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await AllBlogs();
      console.log(data.data);
      setProducts(data.data.slice(0, 2));
    })();
  }, []);

  if (products === null) {
    return <div>Loading.......</div>;
  }
  return (
    <div>
      I am list of Blog Catrgory
      <br />
      <br />
      <article>
        <div>All Posts</div>
        {products.map((item) => (
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
export default ProdCategory;
