import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import AddEmployees from "./pages/AddEmployees";
import EmployeeDetails from "./pages/EmployeeDetails";
import EditEmployee from "./pages/EditEmployee";
import Login from "./pages/Login";

function App() {
  return (
    <>
      {/*all routes for pages */}
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Employees} />
          <Route path="/add" component={AddEmployees} />
          <Route path="/login" component={Login} />
          <Route path="/employees/:id" component={EmployeeDetails} />
          <Route path="/edit/:id" component={EditEmployee} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
