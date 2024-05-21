import React, { useEffect } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, deleteBook } from "../store/bookSlice";

export function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [deletingBookId, setDeletingBookId] = React.useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId));
    setShowConfirmation(false);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleShowConfirmation = (bookId) => {
    setDeletingBookId(bookId);
    setShowConfirmation(true);
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
              {status === "loading" && <div>Loading...</div>}
              {status === "failed" && <div>Error: {error}</div>}
              {status === "succeeded" && (
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
                    {books.map((book) => (
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
                                onClick={() => handleShowConfirmation(book.id)}
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
      <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this book?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(deletingBookId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
