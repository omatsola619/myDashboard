//current employees
const initialState = {
  employees: [
    {
      id: "id471",
      firstname: "David",
      lastname: "Tobi",
      email: "davidtobi@hotmail.com",
      phone: "08100349932",
      role: "employee",
      street: 20,
      city: "ogun",
      state: "Ibadan",
    },
    {
      id: "id982",
      firstname: "Omatsola",
      lastname: "Eyeoyibo",
      email: "omarsunday0@gmail.com",
      phone: "08100349932",
      role: "admin",
      street: 13,
      city: "yaba",
      state: "lagos",
    },
    {
      id: "id932",
      firstname: "Joshua",
      lastname: "Kings",
      email: "kings2022@gmail.com",
      phone: "09023176377",
      role: "employee",
      street: 13,
      city: "warri",
      state: "delta",
    },
  ],
};

//employee reducer
const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    //add employee
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
      //delete employee
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
      //edit employee
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
