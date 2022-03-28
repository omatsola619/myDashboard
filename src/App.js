import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Employees from './pages/Employees';
import AddEmployees from './pages/AddEmployees';
import EmployeeDetails from './pages/EmployeeDetails';
import EditEmployee from './pages/EditEmployee';

function App() {
  return (
    <>
      <Router> 
        <Navbar />
        <Switch>
          <Route path='/' exact component={Employees} />
          <Route path='/add' component={AddEmployees} />
          <Route path='/employees/:id' component={EmployeeDetails} />
          <Route path='/edit/:id' component={EditEmployee} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
