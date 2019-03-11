/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import { connect } from "react-redux";

class App extends Component {

  // ageUp = () => {
  //   type: "AGE_UP"
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.age}</Text>

       
<View style={{margin:20}}>
<Button title="Age UP" onPress={this.props.onAgeUp}></Button>
</View>
<View style={{margin:20}}>
<Button title="Age Down" onPress={this.props.onAgeDown}></Button>
</View>
       
      </View>
    );
  }
}

const mapStateToProps = (state) =>{
return {
  age: state.age
  }
};

const mapDispatchToProps = (dispatch) => ({
 
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_Down", value: 1 })

});

export default connect(mapStateToProps, mapDispatchToProps) (App);

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
