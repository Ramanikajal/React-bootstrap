import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddMedicine({ Display1, setDisplay1 }) {
  const handleClose = () => setDisplay1(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.info("event++", event.target.name.value);
    console.info("event++", event.target.price.value);
    console.info("event++", event.target.quantity.value);
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

    setDisplay1(false);
  };
  return (
    <div>
      <Modal show={Display1} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Add Medicine Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                autoFocus
                defaultValue={"m1"}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                autoFocus
                defaultValue={1}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qauntity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                autoFocus
                defaultValue={100}
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <button type="submit" className="btn btn-primary ms-3">
                Submit
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddMedicine;
