import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "./components/Header";
import TodoItem from './components/TodoItem'

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app in react native", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler =(key) => {
    setTodos(() => {
      return todos.filter(todo => todo.key != key)
    })
  }


  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* TODO Form */}

        <View style={styles.list}>
          <FlatList
            //data
            data={todos}
            //renders the template for each item in the list
            //extract item currently iterating
            renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler}/>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",

    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  },
  item: {
    width: 200,
    marginBottom: 20,
    backgroundColor: "pink",
  },
});
