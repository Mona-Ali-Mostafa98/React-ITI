import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addNewBook, editBook, getBooksById } from "../api/bookApi";
import { Link, useNavigate, useParams } from "react-router-dom";

export function BookForm() {
  const [book, setBook] = useState({
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== '0') {
      const fetchData = async () => {
        try {
          const response = await getBooksById(id);
          setBook(response.data);
        } catch (error) {
          console.error("Failed to fetch book:", error);
        }
      };
      fetchData();
    }
  }, [id]);

  const changeHandler = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (book.title.length < 2) {
      errors.title = "Title must be at least 2 characters long";
      isValid = false;
    }

    if (book.description.length < 10) {
      errors.description = "Description must be at least 10 characters long";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        if (id === '0') {
          await addNewBook(book);
        } else {
          await editBook(book, id);
        }
        navigate("/books");
      } catch (error) {
        console.error("Failed to save book:", error);
      }
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col">
          <div className="mt-5 card shadow mb-4">
            <div className="card-header py-3">
            <div className="row justify-content-between align-items-center">
                <h4 className="col text-primary">{id === '0' ? "Add New Book" : "Edit Book"}</h4>
                <div className="col-2 text-center">
                  <Link to="/books" className="btn btn-outline-primary">
                    Back
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-body">
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    placeholder="Enter Book Title"
                    type="text"
                    name="title"
                    value={book.title}
                    onChange={changeHandler}
                    isInvalid={!!errors.title}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.title}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter Description"
                    name="description"
                    value={book.description}
                    onChange={changeHandler}
                    isInvalid={!!errors.description}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="dark" type="submit">
                  {id === '0' ? "Add New Book" : "Edit Book"}
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
