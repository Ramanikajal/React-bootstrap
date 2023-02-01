import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import AddMedicine from "../components/Modal/Add Medicine";
import EditeMedicine from "../components/Modal/EditeMedicine";

const Department = () => {
  const [Display, setDisplay] = useState(false);

  const [MedicineList, setMedicineList] = useState([]);

  const [ids, setids] = useState([]);

  const [Edit, setEdit] = useState(false);

  const [selectData, setSelectData] = useState({});

  useEffect(() => {
    setMedicineList(JSON.parse(localStorage.getItem("medicineData")) || []);
  }, [Display , Edit]);
  

  const onclickHandler = () => {
    setDisplay(true);
  };

  const onclickDelete = (event) => {
    console.info("eventDelete++", event);

    const filter = MedicineList.filter((i) => {
      return i.id !== event;
    });

    setMedicineList(filter);
    localStorage.setItem("medicineData", JSON.stringify(filter));
  };

  //   Basically onchangeHandler no use true false  karva mate thai chhe
  const onchangeHandler = (isChecked, id) => {
    if (isChecked) {
      setids([...ids, id]);
    } else {
      const filter = ids.filter((i) => i !== id);
      setids(filter);
    }
  };

  //
  const OnCLickBulkDElete = () => {
    const filter = MedicineList.filter((i) => {
      return !ids.includes(i.id);
    });

    setids([]);
    setMedicineList(filter);
    localStorage.setItem("medicineData", JSON.stringify(filter));
  };

  //   Edit
  const onclickEdit = (data) => {
    console.info("edit", data);
    setSelectData(data);
    setEdit(true);
  };
  return (
    <div>
      <div className="section-title mt-5">
        <h2>Departments</h2>
      </div>

      <div className="text-center my-5">
        <button className="btn btn-primary me-2" onClick={OnCLickBulkDElete}>
          Bulk DElete
        </button>
        <button className="btn btn-primary ms-2" onClick={onclickHandler}>
          Add Medicine
        </button>
      </div>

      <AddMedicine Display1={Display} setDisplay1={setDisplay} />
      <EditeMedicine
        Display1={Edit}
        setDisplay1={setEdit}
        SelectData={selectData}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
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
                <td>
                  <input
                    type="checkbox"
                    checked={ids.includes(i.id)}
                    onChange={(event) =>
                      onchangeHandler(event.target.checked, i.id, event)
                    }
                  />
                </td>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.price}</td>
                <td>{i.quantity}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => onclickEdit(i)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onclickDelete(i.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Department;
