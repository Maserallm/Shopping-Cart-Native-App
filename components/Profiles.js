import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const Profiles = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={style.container}>
        <Text style={style.names}>
          <Image source={item.img} style={style.img} />
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    alignContent: "center"
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
    borderColor: "#000000"
  },
  img: {
    height: 50,
    width: 50,
    alignContent: "center",
    zIndex: 5,
    alignItems: "center"
  }
});

export default Profiles;
