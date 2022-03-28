const ADD_EMPLOYEE = "ADD_EMPLOYEE";
const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
const EDIT_EMPLOYEE = "EDIT_EMPLOYEE";

//action creator for adding employee
export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    payload: employee,
  };
};

//action creator for deleting employee
export const deleteEmployee = (id) => {
  return {
    type: DELETE_EMPLOYEE,
    payload: id,
  };
};

//action creator for editing employee
export const editEmployee = (employee, id) => {
  return {
    type: EDIT_EMPLOYEE,
    payload: {employee, id},
  };
};
