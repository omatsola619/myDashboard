const ADD_EMPLOYEE = "ADD_EMPLOYEE";
const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
const EDIT_EMPLOYEE = "EDIT_EMPLOYEE";

export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    payload: employee,
  };
};

export const deleteEmployee = (id) => {
  return {
    type: DELETE_EMPLOYEE,
    payload: id,
  };
};

export const editEmployee = (employee, id) => {
  return {
    type: EDIT_EMPLOYEE,
    payload: {employee, id},
  };
};
