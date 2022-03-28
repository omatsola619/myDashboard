import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function EmployeeDetails() {
  const { id } = useParams();
  const employee = useSelector((state) =>
    state.employees.find((employee) => employee.id === id)
  );

  return (
    <div>
      <div className="container details">
        <h3 className="mt-3 mb-4">{employee.firstname}'s Details</h3>
        <div className="card">
          <div className="card-header">
            <h1>
              {employee.firstname} {employee.lastname}
            </h1>
          </div>
          <div className="card-body">
            <h5 className="card-text">Role: {employee.role}</h5>
            <h5 className="card-text">Email: {employee.email}</h5>
            <h5 className="card-text">Phone: {employee.phone}</h5>
            <h5 className="card-text">
              Address: No {employee.street}, {employee.city}, {employee.state}
            </h5>
            <a onClick={() => window.location = `mailto:${employee.email}`} className="btn btn-dark" >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
