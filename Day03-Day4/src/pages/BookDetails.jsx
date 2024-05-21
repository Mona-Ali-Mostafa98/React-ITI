import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export function BookDetails() {
  const book = useLoaderData();

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center align-items-center">
        <div className="col-12 col-lg-8 mt-5">
          <div className="card shadow bg-body-tertiary rounded">
            <div className="card-header py-3">
              <div className="row justify-content-between align-items-center">
                <h4 className="col text-primary">Product Details</h4>
                <div className="col-2 text-center">
                  <Link to="/books" className="btn btn-outline-primary">
                    Back
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-body p-5">
              <p className="lead"><strong>ID:</strong> {book.id}
              </p>
              <p className="lead"><strong>Title:</strong> {book.title}</p>
              <p className="lead "><strong>Description: </strong> {book.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
