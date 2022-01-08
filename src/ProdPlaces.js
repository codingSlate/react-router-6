import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { rettrieveProduct } from './ProductService';

const ProdPlaces = () => {
  const { id } = useParams();
  console.log(id);
  const [places, setPlaces] = useState(null);

  useEffect(() => {
    (async () => {
      const product = await rettrieveProduct(id);
    })();
  }, [id]);

  return (
    <div>
      I am list of places
      {places == null && <p>Loading.....</p>}
      <div>Places</div>
    </div>
  );
};
export default ProdPlaces;
