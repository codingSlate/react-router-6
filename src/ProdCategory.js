import React, { useState, useEffect } from 'react';
import { listProducts } from './ProductService';

const ProdCategory = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await listProducts();
      // console.log(data);
      setProducts(data);
    })();
  }, []);

  if (products === null) {
    return <div>Loading.......</div>;
  }
  return (
    <div>
      I am list of Places
      <br />
      <br />
      <article>
        <div>post code : {products['post code']}</div>
        <div>country : {products['country']}</div>
        <div>country abbreviation: {products['country abbreviation']}</div>
        <br />
        <div>Places</div>
        {products.places.map((item) => (
          <>
            <div>place name: {item['place name']}</div>
            <div>longitude: {item['longitude']}</div>
            <div>state: {item['state']}</div>
            <div>state: {item['state abbreviation']}</div>
            <div>latitude: {item['latitude']}</div>
          </>
        ))}
      </article>
    </div>
  );
};
export default ProdCategory;
