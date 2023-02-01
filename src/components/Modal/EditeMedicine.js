import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function EditeMedicine({ Display1, setDisplay1 ,SelectData}) {
  const handleClose = () => setDisplay1(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const Medicine = {
      id: SelectData.id,
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
    };

    const  data = JSON.parse(localStorage.getItem('medicineData'));
    console.log("update" ,  Medicine)
    const UpdateDate = data.map((i)=>{

        if(i.id === Medicine.id){
            i = Medicine
        }
        return i
    })

    localStorage.setItem('medicineData',JSON.stringify(UpdateDate))
    setDisplay1(false)
    
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
                defaultValue={SelectData.name}              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                autoFocus
                defaultValue={SelectData.price}              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qauntity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                autoFocus
                defaultValue={SelectData.quantity}
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

export default EditeMedicine;
