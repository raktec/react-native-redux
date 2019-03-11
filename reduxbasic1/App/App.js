import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";

 class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignContent: "space-around" }}>
        <View
          style={{
            backgroundColor: "yellow",
            height: "50%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
                <Text style={{ fontSize: 40 }}>{this.props.count}</Text>
                <Text style={{ fontSize: 40 }}>Value</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignContent: "space-around",
            height: "50%"
          }}
        >
         <View style={{ backgroundColor: "pink", width: "50%" }} >
                    <View style={{margin:20}}>
                        <Button
                            onPress={this.props.onAdd}
                            title="Increase"
                            color="#345678"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                    

         </View>
          <View style={{ backgroundColor: "lightgreen", width: "50%"}}>
                    
                    <View style={{ margin: 20 }}>
                        <Button
                            onPress={() => alert('decrease')}
                            title="Decrease"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                            style={{ margin: 20 }}
                        />
                    </View>
          </View>
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispatchToProps = (dispatch) => ({
    onAdd: () => dispatch({ type: "ADD" })
});


export default connect(mapStateToProps, mapDispatchToProps)(App);

