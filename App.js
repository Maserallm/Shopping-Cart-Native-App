//Have to import react
import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

const App = () => {
  return (
    //Views are looked at as divs and Text component is like a paragraph tag in html or typical jsx
    <View style={style.container}>
      <Text style={style.title}>Hello World</Text>
      <Text style={style.names}>Maserall</Text>
      <Text style={style.names}>Nadia</Text>
      <Text style={style.names}>Power Couple</Text>
      <StatusBar hidden={true} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  title: {
    fontSize: 30,
    fontFamily: "Helvetica",
    borderBottomColor: "black",
    textAlign: "center",
    marginBottom: 20
  },
  names: {
    fontSize: 18,
    fontFamily: "Helvetica",
    borderBottomColor: "black",
    textAlign: "center",
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee"
  }
});

export default App;
