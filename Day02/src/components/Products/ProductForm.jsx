import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function ProductForm({ products, setProducts }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    freeShipping: 0,
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    const value = e.target.type === 'checkbox' ? (e.target.checked ? 1 : 0) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });

    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };
  

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (formData.name.length < 2) {
      errors.name = "Name must be at least 2 characters long";
      isValid = false;
    }

    if (!formData.price || parseInt(formData.price) < 10) {
      errors.price = "Price must be at least 10";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setProducts([...products, formData]);
      setFormData({
        name: "",
        price: "",
        freeShipping: 0,
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col">
          <div className=" mt-5 card shadow mb-4">
            <div className="card-header py-3">
              <div className="row justify-content-between align-items-center">
                <h4 className="col text-primary">Add New Product</h4>
              </div>
            </div>
            <div className="card-body">
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={changeHandler}
                    placeholder="Enter Product Name"
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    name="price"
                    onChange={changeHandler}
                    value={formData.price}
                    type="number"
                    placeholder="Enter Product Price"
                    isInvalid={!!errors.price}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.price}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Free Shipping"
                    name="freeShipping"
                    checked={formData.freeShipping}
                    onChange={changeHandler}
                  />
                </Form.Group>

                <div className="row justify-content-center">
                  <Button variant="outline-primary w-50" type="submit">
                    Add Product
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
