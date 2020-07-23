import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddTodo(props) {
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
 
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add todo"
        onChangeText={changeHandler}
        value={text}
      />
      <Button onPress={() => {props.submitHandler(text), setText("")}} title="Add" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
