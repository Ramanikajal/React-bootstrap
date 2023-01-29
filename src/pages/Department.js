import React , { useState , useEffect } from "react";
import Table from "react-bootstrap/Table";
import AddMedicine from "../components/Modal/Add Medicine";

const Department = () => {
  const [Display, setDisplay] = useState(false);

  const [MedicineList, setMedicineList] = useState([])

  useEffect(() => {
  
    setMedicineList(JSON.parse(localStorage.getItem('medicineData')) || [])
  }, [Display])
  
  const onclickHandler = () => {
    setDisplay(true)
  }

  const onclickDelete = (event) => {
    console.info("eventDelete++" , event)

    const filter = MedicineList.filter( (i) => {
        return i.id !== event
    })

    setMedicineList(filter)
    localStorage.setItem('medicineData' ,JSON.stringify(filter))
  }
  return (
    <div>
      <div className="section-title mt-5">
        <h2>Departments</h2>
      </div>

      <div className="text-center my-5">
        <button className="btn btn-primary" onClick={onclickHandler}>Add Medicine</button>
      </div>

      <AddMedicine Display1={Display} setDisplay1={setDisplay} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {MedicineList.map((i, index) => {
            return (
              <tr key={index}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.price}</td> 
                <td>{i.quantity}</td>
                <td><button className="btn btn-success">Edit</button></td>
                <td><button className="btn btn-danger" onClick={ () => onclickDelete(i.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Department;
