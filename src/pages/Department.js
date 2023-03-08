import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import AddMedicine from "../components/Modal/Add Medicine";
import EditeMedicine from "../components/Modal/EditeMedicine";
import { useNavigate } from "react-router-dom";

const Department = () => {
  const Navigate1 = useNavigate();

  const [Display, setDisplay] = useState(false);

  const [MedicineList, setMedicineList] = useState([]);

  const [ids, setids] = useState([]);

  const [Edit, setEdit] = useState(false);

  const [selectData, setSelectData] = useState({});

  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    setMedicineList(JSON.parse(localStorage.getItem('medicineData')) || []);
  }, [sortData]);

  const onclickHandler = () => {
    // setDisplay(true);
    Navigate1("/AddMedicenPage");
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
    console.info("edit", data.id);
    setSelectData(data);
    // setEdit(true);
    Navigate1(`/AddEdit/${data.id}`);
  };

  const onChangeSearch = (event) => {
    console.info("event++", event.target.value);
    const data = JSON.parse(localStorage.getItem("medicineData"));

    const Filter = data.filter((i) => i.name == event.target.value);

    if (!event.target.value) {
      setMedicineList(data);
    } else {
      setMedicineList(Filter);
    }
  };

  // Select And Filter Functionality

  const OnchangeSelect = (event) => {
    const data = JSON.parse(localStorage.getItem("medicineData"));

    const filter = data.filter((i) => i.name === event.target.value);

    if (!event.target.value) {
      setMedicineList(data);
    } else {
      setMedicineList(filter);
    }
  };

  //   sortingData
  //   data ne sort karva mate ek navo usestate banavi ne pacchhi empty depandency ma store karvo !

  const sortingData = () => {
    {
        const sort = MedicineList.sort( (a,b) => a.price - b.price);
        localStorage.setItem('medicineData' , JSON.stringify(sort));
        setSortData(sort)
    }
  };


  const sortQuantity = () => {
    const sort = MedicineList.sort( (a,b) => a.quantity - b.quantity);
    localStorage.setItem('medicineData' , JSON.stringify(sort));
    setSortData(sort)
  }


  const sortingName = () => {
    
    const sort = MedicineList.sort(  (a,b)  => a.name.localeCompare(b.name));
    localStorage.setItem('medicineData' , JSON.stringify(sort));
    setSortData(sort)
    
  }

  return (
    <div>
      <div className="section-title mt-5">
        <h2>Departments</h2>
      </div>

      <div className="text-center my-5">
        <button className="btn btn-primary me-2" onClick={OnCLickBulkDElete}>
          Bulk Delete
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

      <div className="text-center my-5">
        <input
          type="text"
          className="w-25 me-5"
          placeholder="Search Here !"
          onChange={onChangeSearch}
        />

        <select onChange={OnchangeSelect}>
          <option value={""}> -- Select --</option>
          {JSON.parse(localStorage.getItem("medicineData"))?.map((i) => {
            return <option value={i.name}>{i.name}</option>;
          })}
        </select>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Name <button onClick={sortingName}> ascending order</button></th>
            <th>
              Price
              <button onClick={() => sortingData("price")}>
                ascending order
              </button>
            </th>
            <th>Quantity <button onClick={sortQuantity} >ascending order</button></th>
          </tr>
        </thead>
        <tbody>
          {MedicineList?.map((i, index) => {
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
