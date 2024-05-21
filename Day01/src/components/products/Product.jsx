import React from 'react';

function Product({ name, price, quantity, description, image }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card m-2 h-100 shadow-lg">
        <img alt={name} className="border border-1 rounded" src={image} style={{ height: "50vh" }} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <span><strong>Price: </strong>{price}</span>
          <div><strong>Quantity:</strong> {quantity}</div>
          <p className="card-text text-mute">
            {description}
          </p>
        </div>
        <div className="card-footer text-center">
          <button type="button" className='btn btn-primary'>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;

