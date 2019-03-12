/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { connect } from "react-redux";

// export const callWebservice = () => {
//   return dispatch => {
//     fetch('http://dummy.restapiexample.com/api/v1/employee/7375', { method: 'Get'})
//     .then((response) => response.json())
//     .then((responseJson) => {
//       dispatch (serviceSuccessAction(responseJson.employee_name))
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   }
// }
// export const serviceSuccessAction = (data) => ({
//   type: "SERVICE_SUCCESS",
//   data: data
// })



class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.age}</Text>


        <View style={{ margin: 20 }}>
          <Button title="Age UP" onPress={this.props.onAgeUp}></Button>
        </View>
        <View style={{ margin: 20 }}>
          <Button title="Age Down" onPress={this.props.onAgeDown}></Button>
        </View>

        <View style={{ margin: 20 }}>
          <Button title="Submit" onPress={this.props.showEmployeeList}></Button>

          {this.props.data.map((employee) =>{
           return <Text style={styles.welcome}>{employee["employee_name"]}</Text>;
          })

          }
        </View>

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.employeeReducer.data);
 
  return {
    age: state.ageReducer.age,
    data: state.employeeReducer.data

    // data: state.serviceReducer.data
    // data: state.serviceReduser.data

  }
};

const mapDispatchToProps = (dispatch) => ({

  onAgeUp: () => dispatch({ type: "AGE_UP", value: 2 }),
  onAgeDown: () => dispatch({ type: "AGE_Down", value: 1 }),
  showEmployeeList: () => dispatch({ type: "EMPLOYEE_LIST"})
  // showData: () => dispatch({ type: "SERVICE_DATA"})
  // callService: () => dispatch(callWebservice())

});

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
