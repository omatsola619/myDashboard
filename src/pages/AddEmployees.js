import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  deleteEmployee,
  editEmployee,
} from "../redux/actions/index";
import { useHistory } from "react-router-dom";

function AddEmployees() {
  const employees = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const history = useHistory();

  //state for employee details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  //submitting employee details
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phone: phone,
      role: role,
      street: street,
      city: city,
      state: state,
      id: "id" + phone.substring(0, 3),
    };
    dispatch(addEmployee(data));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setRole("");
    setStreet("");
    setCity("");
    setState("");

    history.push("/home");
  };
  return (
    //form for adding new employees
    <div className="add-employees container">
      <h2 className="add-header">Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            className="form-control"
            placeholder="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            className="form-control"
            placeholder="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="role">Role</label>
          <select
            className="form-control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Select role</option>
            <option value='staff'>Employee</option>
            <option value='admin'>Admin</option>
            <option value='manager'>Manager</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Street number</label>
          <input
            type="text"
            className="form-control"
            placeholder="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            placeholder="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            className="form-control"
            placeholder="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddEmployees;
