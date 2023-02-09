import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

function AddEditePage() {

    const navigate = useNavigate();
  const { id } = useParams();

  const [EditData, setEditData] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("medicineData"));
    const filter = data.find((i) => i.id == id);
    setEditData(filter);
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const Medicine = {
      id: Number(id),
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
    };

    const data = JSON.parse(localStorage.getItem("medicineData"));

    const UpdateDate = data.map((i) => {
      if (i.id == id) {
        i = Medicine;
      }
      return i;
    });

    localStorage.setItem('medicineData', JSON.stringify(UpdateDate));

    console.info('UpdateDate++',UpdateDate)
    navigate('/Departments')
  };
  return (
    <div>
      <div className="container">
        <Form onSubmit={onSubmitHandler} className="form-control  mt-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Edite MedicineList ⚛️ </Form.Label>
            <Form.Control
              type="text"
              name="name"
              defaultValue={EditData.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              defaultValue={EditData.price}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Qauntity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              defaultValue={EditData.quantity}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="secondary">
              {/* <Button variant="secondary" onClick={handleClose}> */}
              Close
            </Button>
            <button type="submit" className="btn btn-primary ms-3">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddEditePage;
