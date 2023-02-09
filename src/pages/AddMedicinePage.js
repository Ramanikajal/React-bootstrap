import React from "react";
import Form from "react-bootstrap/Form";
import { useNavigate  } from "react-router-dom";

function AddMedicinePage() {

    const Nevigate = useNavigate()
    
  const onSubmitHandler = (event) => {

    event.preventDefault();
    const Medicine = {
      id: new Date().getTime(),
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
    };

    console.info("Medicine++", Medicine);

    if (localStorage.getItem("medicineData")) {
      const data = JSON.parse(localStorage.getItem("medicineData"));
      data.push(Medicine);
      localStorage.setItem("medicineData", JSON.stringify(data));
    } else {
      const medicineArry = JSON.stringify([Medicine]);
      localStorage.setItem("medicineData", medicineArry);
    }

    Nevigate('/Departments')
  };
  return (
    <div>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Add Medicine Name</Form.Label>
          <Form.Control type="text" name="name" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Qauntity</Form.Label>
          <Form.Control type="number" name="quantity" autoFocus />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <button variant="secondary">
            Close
          </button>
          <button type="submit" className="btn btn-primary ms-3">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AddMedicinePage;
