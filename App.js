import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState(false);
  const [person, setPerson]= useState({name:'mario', age:40})

  const clickHandler = () => {
    setName(!name)
    setPerson({name:"Luigi", age:10})
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name ? "Taylor" : "Beth"}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />
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
    marginTop:20,
    backgroundColor:"blue",
   
  }
});
