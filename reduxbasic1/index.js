/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import React from "react";

import App from './App/App';
import {name as appName} from './app.json';
import {Provider  } from "react-redux";
import { createStore } from "redux";

const initialState = {
    count: 1
}; 
const Resuder = (state = initialState , action) =>{
    const newState = {...state}
 
    if (action.type === 'ADD'){
        // newState.count += newState.count ;
        return {
            count: state.count + 1
        };
    }
    
    return newState
};

const store = createStore(Resuder);




const RNprovider = () =>{
    return <Provider store={store}>
        <App/>
    </Provider>
}


AppRegistry.registerComponent(appName, () => RNprovider);
