import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

function BooksList() {
  const { data } = useLoaderData();

  // State to manage books
  const [books] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 4;

  // Calculate the index of the first and last books for the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(books.length / booksPerPage);

  return (
    <div>
      <div className="row text-center border border-1 m-5 shadow p-3 bg-body rounded">
        <h2 className="col" id="books">
          Books
        </h2>
      </div>
      <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 m-3">
        {currentBooks.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            description={book.description}
            image={book.image}
          />
        ))}
      </div>
      <div className="row mx-4 justify-content-between align-items-center">
        <div className="col-auto mt-5 mb-5">
          <div className="text-center">
              <Link
                to={`/books`}
                className="btn btn-outline-primary p-2"
              >
                Show all books
              </Link>
          </div>
        </div>
        <div className="col-auto mt-5 mb-5">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => paginate(currentPage - 1)}>
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index + 1} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BooksList;
