//Have to import react
import React from 'react';
import {View, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    //Views are looked at as divs and Text component is like a paragraph tag in html or typical jsx
    <View style={{paddingTop: 60}}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'Helvetica',
          borderBottomColor: 'black',
          textAlign: 'center',
        }}>
        Hello World
      </Text>
      <StatusBar hidden={true} />
    </View>
  );
};

export default App;
