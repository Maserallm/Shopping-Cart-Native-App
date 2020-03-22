import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "black",
    backgroundColor: "red",
    marginBottom: 30
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    fontFamily: "Helvetica",
    borderBottomColor: "black",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    color: "white"
  }
});

export default Header;
