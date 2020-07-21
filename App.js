import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState('taylor');
  const [age, setAge]= useState("32")

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
      onChangeText={(val) => setName(val)} />
 <Text>Enter age:</Text>
<TextInput 
// keyboardAppearance="dark"
keyboardType="numeric"
      style={styles.input}
      placeholder="e.g. 99" 
      onChangeText={(val) => setAge(val)} />
      
      <Text>My name is {name} and my age is {age}</Text>
      <View style={styles.buttonContainer}>
        {/* <Button title="update state" onPress={clickHandler} /> */}
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
   
  },

  input:{
    borderWidth:1,
    borderColor:"#777",
    padding:8,
    margin:10,
    width:200,

  }
});
