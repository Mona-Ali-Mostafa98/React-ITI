import React, { useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";

export function ProductTable({ products, setProducts }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deletingIndex, setDeletingIndex] = useState(null);

  const handleDelete = () => {
    const updatedProducts = products.filter((product, index) => index !== deletingIndex);
    setProducts(updatedProducts);
    setShowConfirmation(false);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setDeletingIndex(null);
  };

  const handleShowConfirmation = (index) => {
    setDeletingIndex(index);
    setShowConfirmation(true);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col">
          <div className="card shadow mb-5">
            <div className="card-header py-3">
              <div className="row justify-content-between align-items-center">
                <h4 className="col text-primary">Products</h4>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <Table className="table-bordered table-hover table-responsive" striped bordered hover>
                    <thead className="table-light">
                      <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Free Shipping</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="fs-3 text-center text-muted">No products available</td>
                        </tr>
                      ) : (
                        products.map((product, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.freeShipping ? "Yes" : "No"}</td>
                            <td>
                              <div className="row justify-content-start align-items-start">
                                <div className="col-auto">
                                  <a href="#" className="btn btn-outline-success p-2">
                                    Show
                                  </a>
                                </div>
                                <div className="col-auto">
                                  <a href="#" className="btn btn-outline-warning p-2">
                                    Edit
                                  </a>
                                </div>
                                <div className="col-auto">
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger p-2"
                                    onClick={() => handleShowConfirmation(index)}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
