

const initialState = {
    data:"callService"
    //   {isLoading: false, error: undefined, data: {}}
}

const serviceReducer = (state = initialState, action) => {
    const newstate = {...state}
       switch (action.type) {
           case "SERVICE_DATA":
           return {
               ...state,
               data: "SERVICE_PENDING"
           }

       }
       return newstate;
   };


// const serviceReducerInitialState = {
//     // isLoading: false,
//     // error: undefined,
//     data: {}
// }


// const serviceReducer = (state = serviceReducerInitialState, action) => {

//     switch (action.type) {
//         case "SERVICE_PENDING":
//             return alert("SERVICE_PENDING");

//         case "SERVICE_ERROR":
//             return alert("SERVICE_ERROR");

//         case "SERVICE_SUCCESS":
//             return alert("SERVICE_SUCCESS");

//         default:
//             return alert("default");
//     }
// };

export default serviceReducer;