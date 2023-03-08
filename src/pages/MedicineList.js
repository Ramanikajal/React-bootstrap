import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useState } from 'react';

function MedicineList() {
  const [editdata, seteditdata] = useState({})
  const [edit, setedit] = useState(false)
    const data = useSelector((data) => data.admin.Appdata)

    console.log('dataaa' , data)
    const onclickdelet = (id) => {
      if (window.confirm("are you sure  delet")) {
          // dispatch(deletmedicensdata(id))
      }
  }
  const onclickEdit = (data) => {
      setedit(true);
      seteditdata(data)
  }

  return (
    <div className="mt-5">
      <h2>MedicineList !</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((i) => {
            return (
              <tr key={Math.random()}>
                <td>{i?.name}</td>
                <td>{i?.email}</td>
                <td>{i?.phone}</td>
                <td>{i?.message}</td>
                <td><button className="appointment-btn scrollto" onClick={() => onclickdelet(i.id)}> delet</button>
                 <button className="btn btn-success" onClick={() => onclickEdit(i)}> Edit</button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default MedicineList;
