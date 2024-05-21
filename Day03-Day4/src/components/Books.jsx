import React, { useEffect, useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

import { deleteBook } from "../api/bookApi";

export function Books() {
  const { data } = useLoaderData();

  const [books, setBooks] = useState(data);
  const [isError, setIsError] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deletingBookId, setDeletingBookId] = useState(null);

  const deleteHandler = async (bookId) => {
    try {
      await deleteBook(bookId);
      const newList = books.filter((book) => book.id !== bookId);
      setBooks(newList);
      setShowConfirmation(false);
    } catch (error) {
      console.error("Failed to delete the book:", error);
      setIsError(true);
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setDeletingBookId(null);
  };

  const handleShowConfirmation = (bookId) => {
    setDeletingBookId(bookId);
    setShowConfirmation(true);
  };

  const handleDelete = () => {
    if (deletingBookId) {
      deleteHandler(deletingBookId);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col">
          <div className="card shadow mb-5">
            <div className="card-header py-3">
              <div className="row justify-content-between align-items-center">
                <h4 className="col text-muted">Our Books</h4>
                <div className="col-2 text-center">
                  <Link to="/books/0/edit" className="btn btn-outline-primary">
                    Add New Book
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  {isError ? (
                    <h1 className="alert alert-danger">Can't load Books</h1>
                  ) : (
                    <Table
                      className="table-bordered table-hover table-responsive"
                      striped
                      bordered
                      hover
                    >
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {books &&
                          books.map((book) => (
                            <tr key={book.id}>
                              <td>{book.id}</td>
                              <td>{book.title}</td>
                              <td>{book.description}</td>
                              <td className="w-25">
                              <div className="row justify-content-start align-items-start">
                                <div className="col-auto">
                                  <Link
                                    to={`/books/${book.id}`}
                                    className="btn btn-outline-success p-2"
                                  >
                                    Show
                                  </Link>
                                </div>

                                <div className="col-auto">
                                  <Link
                                    to={`/books/${book.id}/edit`}
                                    className="btn btn-outline-warning p-2"
                                  >
                                    Edit
                                  </Link>
                                </div>

                                <div className="col-auto">
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger p-2"
                                    onClick={() =>
                                      handleShowConfirmation(book.id)
                                    }
                                  >
                                    Delete
                                  </button>
                                  </div>
                                  </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  )}
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
