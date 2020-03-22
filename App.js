//Have to import react
import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  Image
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import img1 from "./assets/images/woman-in-pink-long-sleeve-hoodie-carrying-tissue-rolls-3962433.jpg";
import img2 from "./assets/images/person-in-white-long-sleeve-shirt-holding-clear-bottle-3962516.jpg";
import img3 from "./assets/images/clear-glass-h2o-bottle-113734.jpg";
import img4 from "./assets/images/sliced-oranges-1435737.jpg";
import img5 from "./assets/images/gray-and-black-semi-automatic-pistol-3602946.jpg";
import img6 from "./assets/images/photography-of-one-us-dollar-banknotes-545064.jpg";
import img7 from "./assets/images/photo-of-child-reading-holy-bible-935944.jpg";
import Profiles from "./components/Profiles";
import Header from "./components/Header";

const App = () => {
  const [users, setUsers] = useState([
    { id: uuidv4(), text: "Toilet Paper", img: img1 },
    { id: uuidv4(), text: "Hand Sanitizer", img: img2 },
    { id: uuidv4(), text: "Water", img: img3 },
    { id: uuidv4(), text: "Oranges", img: img4 },
    { id: uuidv4(), text: "Gun", img: img5 },
    { id: uuidv4(), text: "Cash", img: img6 },
    { id: uuidv4(), text: "Jesus", img: img7 }
  ]);
  return (
    //Views are looked at as divs and Text component is like a paragraph tag in html or typical jsx
    <View style={style.container}>
      <StatusBar hidden={true} />
      <Header title="COVID-19 Quarentine Shopping List" />
      <FlatList
        data={users}
        renderItem={({ item }) => <Profiles item={item} />}
      />
      {/* <Profiles name="Maserall" img1={img1} />
      <Profiles name="Nadia" img2={img2} />
      <Profiles name="Power Couple" img3={img3} /> */}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;
