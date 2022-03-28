const initialState = {
  employees: [
    {
      id: "id471",
      firstname: "John",
      lastname: "Doe",
      email: "johndoe@mail.com",
      phone: "123456789",
      role: "manager",
      street: 20,
      city: "ogun",
      state: "Ibadan",
    },
    {
      id: "id982",
      firstname: "Jane",
      lastname: "Doe",
      email: "jane@gmail.com",
      phone: "123456789",
      role: "employee",
      street: 13,
      city: "Ikorodu",
      state: "lagos",
    },
  ],
};

const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };

    case "EDIT_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((employee) => {
          if (employee.id === action.payload.id) {
            return action.payload;
          }
          return employee;
        }),
      };
    default:
      return state;
  }
};

export default EmployeeReducer;
