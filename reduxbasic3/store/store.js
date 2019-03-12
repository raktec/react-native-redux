import { createStore,combineReducers } from 'redux';
import reducer from './reducer';
// import serviceReducer from "./serviceReducer";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
    ageReducer: reducer,
    // serviceReducer: serviceReducer
    employeeReducer: employeeReducer
});

const configureStore = () => {
    return createStore(rootReducer);
  }

export default configureStore;
