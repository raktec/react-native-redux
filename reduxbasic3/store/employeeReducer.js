
const initialState = {
    data: []
}

const dataArray = [
    {"id":"1",
    "employee_name":"Jay",
    "employee_salary":"15000",
    "employee_age":"29",
    "profile_image":""
    },
    {"id":"2",
    "employee_name":"Rahul",
    "employee_salary":"2500",
    "employee_age":"25",
    "profile_image":""
    }
]

const employeeReducer = (state = initialState, action) => {

    const newstate = {...state}
       switch (action.type) {
           case "EMPLOYEE_LIST":
           return {
               ...state,
               data: dataArray
           }
           case "EMPLOYEE":
           return {
               ...state,
               data: dataArray
           }
           
       }
       return newstate;
   };

export default employeeReducer;
