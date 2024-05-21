import React from 'react';
import Product from './Product';

function Products() {
  // Array of product objects with details
  const products = [
    {
      id: 1,
      name: 'Product one',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: 'https://themewagon.github.io/MiniStore/images/product-item1.jpg',
    },
    {
      id: 2,
      name: 'Product Two',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      name: 'Product Three',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: 'https://images.pexels.com/photos/1693627/pexels-photo-1693627.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div>
      <div className="row text-center border border-1 m-5 shadow p-3 bg-body rounded">
        <h2 className="col" id="products">
          Products
        </h2>
      </div>
      <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 m-3">

        {products.map(product => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
