import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import dbData from "../../server/db.json";

const DataTable = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      setUsers(dbData.user);
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }, []);

  if (!user) {
    return <p>You need to be logged in to view data.</p>;
  }

  return (
    <div className="table-container">
      <Table striped bordered hover responsive className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>Sagar Bhamare</td>
            <td>22-12-2000</td>
            <td>sagar@gmail.com </td>
          </tr>
          <tr>
            <td>Om Gurav </td>
            <td>22-2-2001</td>
            <td>om@gmail.com </td>
          </tr>
          <tr>
            <td>Vaishnavi Date </td>
            <td>22-4-2001</td>
            <td>vaishnavi@gmail.com </td>
          </tr> */}
          {users.map((userData, index) => (
            <tr key={index}>
              <td>{userData.name}</td>
              <td>{userData.dob}</td>
              <td>{userData.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
