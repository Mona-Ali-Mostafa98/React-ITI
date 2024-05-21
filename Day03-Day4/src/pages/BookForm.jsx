import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookById, createBook, updateBook } from "../store/bookSlice";

export function BookForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) => state.books.book);

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id !== '0') {
      dispatch(fetchBookById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id !== '0' && book) {
      setFormData({
        title: book.title || "",
        description: book.description || "",
      });
    }
  }, [id, book]);

  const changeHandler = (e) => {
    setFormData({
      ...formData,
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

    if (formData.title.length < 2) {
      errors.title = "Title must be at least 2 characters long";
      isValid = false;
    }

    if (formData.description.length < 10) {
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
          await dispatch(createBook(formData)); // Dispatch createBook action
        } else {
          await dispatch(updateBook({ id, book: formData })); // Dispatch updateBook action
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
                    value={formData.title || ""}
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
                    value={formData.description || ""}
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
  