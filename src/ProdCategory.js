import React, { useState, useEffect } from 'react';
import { listProducts } from './ProductService';

const ProdCategory = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await listProducts();
      console.log(data.data);
      setProducts(data.data.slice(0, 2));
    })();
  }, []);

  if (products === null) {
    return <div>Loading.......</div>;
  }
  return (
    <div>
      I am list of Catrgoty
      <br />
      <br />
      <article>
        <div>Posts</div>
        {products.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <div>{item.body.substring(0, 100)}...</div>
            <hr/>
          </div>
        ))}
      </article>
    </div>
  );
};
export default ProdCategory;
