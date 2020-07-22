import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [name, setName] = useState("taylor");
  const [age, setAge] = useState("32");

  const [people, setPeople] = useState([
    { name: "Leo", id: "1" },
    { name: "Don", id: "2" },
    { name: "Raph", id: "3" },
    { name: "Mikey", id: "4" },
  ]);

  // const clickHandler = () => {
  //   setName(!name)
  // }
  // const changeText =(val) =>{
  //   setName(val)
  // }

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter age:</Text>
      <TextInput
        keyboardAppearance="dark"
        // keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 99"
        onChangeText={(val) => setAge(val)}
      />

      <Text>
        My name is {name} and my age is {age}
      </Text>
      <View style={styles.buttonContainer}>
        {/* <Button title="update state" onPress={clickHandler} /> */}
      </View>
      <StatusBar style="auto" />

      <FlatList
        //keyExtractor since no key, ID instead
        keyExtractor={(item) => item.id}
        //data to cycle through
        data={people}
        //equal to a function that returns some JSX. Destructure item in array
        renderItem={({ item }) => <Text style={styles.item}>{item.name} </Text>}
      />

      {/* {people.map(item => (
        <View key={item.id}>

<Text>{item.name} </Text>
          </View>
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "blue",
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    width: 200,
    marginBottom: 20,
    backgroundColor: "pink",
  },
});
