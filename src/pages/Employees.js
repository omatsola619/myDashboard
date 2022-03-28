import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteEmployee,
  filterEmployee,
  searchEmployee,
} from "../redux/actions/index";
import { Link } from "react-router-dom";

function Employees() {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="employees container">
      {/*search box and header for employee details */}
      <header>
        <h2 className="add-header">Current Employees</h2>
        <input
          type="text"
          placeholder="search employee"
          value={searchValue}
          onChange={handleSearch}
        />
      </header>
      {/*filter and add new buttons */}
      <div className="action">
        <div className="filter">
          filter
          <select
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="ml-3"
          >
            <option value="">All</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        <Link to="/add" className="btn btn-outline-dark">
          Add new Employee
        </Link>
      </div>
      {/*table header starts here */}
      <div className="cover">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <th scope="col">View Employee</th>
            </tr>
          </thead>
          <tbody>
            {employees && employees.length > 0 ? (
              employees
                //filter employees by search value
                .filter((employee) => {
                  return (
                    employee.firstname
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    employee.lastname
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    employee.email
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    employee.phone
                      .toString()
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  );
                })
                //filter employees by role
                .filter((employee) => {
                  return employee.role
                    .toLowerCase()
                    .includes(filterValue.toLowerCase());
                })
                //display all employees in a table
                .map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.firstname}</td>
                    <td>{employee.lastname}</td>
                    <td>{employee.email}</td>
                    <td>
                      <Link to={`/edit/${employee.id}`} className="edit">
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => handleDelete(employee.id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link to={`/employees/${employee.id}`} className="view">
                        View Employee
                      </Link>
                    </td>
                  </tr>
                ))
            ) : (
              <h4 className="mt-4">No Employee found...</h4>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employees;
