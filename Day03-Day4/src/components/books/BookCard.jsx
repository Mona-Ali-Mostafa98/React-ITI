import React from 'react';

function BookCard({ id, title, price, quantity, description, image }) {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="card m-2 h-100 shadow-lg">  {/* https://source.unsplash.com/random/200x200?sig=${id} - https://picsum.photos/200/300?random=1 */}
        <img alt={title} className="border border-1 rounded" src={`https://source.unsplash.com/random/?Cryptocurrency&${id}`} style={{ height: "30vh" }} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <span><strong>Price: </strong>100</span>
          <div><strong>Quantity:</strong> 20</div>
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

export default BookCard;

