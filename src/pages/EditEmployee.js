import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editEmployee } from "../redux/actions/index";

function EditEmployee() {
  //state for editing existing employee details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const dispatch = useDispatch();

  const { id } = useParams();
  const employee = useSelector((state) =>
    state.employees.find((employee) => employee.id === id)
  );
  const history = useHistory();

  useEffect(() => {
    if (employee) {
      setFirstName(employee.firstname);
      setLastName(employee.lastname);
      setEmail(employee.email);
      setPhone(employee.phone);
      setRole(employee.role);
      setStreet(employee.street);
      setCity(employee.city);
      setState(employee.state);
    }
  }, [employee]);

  //submitting employee edited details
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
      id: id,
    };
    dispatch({ type: "EDIT_EMPLOYEE", payload: data });
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
    //form for editing existing employees
    <div className="add-employees container">
      {employee ? (
        <>
          <h2 className="add-header">Edit Employee</h2>
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
                <option value="staff">Employee</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
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
              Update
            </button>
          </form>
        </>
      ) : (
        <h2>Employee with id {id} not found</h2>
      )}
    </div>
  );
}

export default EditEmployee;
