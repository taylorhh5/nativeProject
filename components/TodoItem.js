import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem(props) {
  console.log(props, "props in item");
  return (
    <View>
      <TouchableOpacity onPress={() => props.pressHandler(props.item.key)}>
        <View style={styles.item}>
          <MaterialIcons name="delete" size={18} color="#333" />
          <Text style={styles.itemText}>{props.item.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  itemText:{
      marginLeft:15,
  }
});
