import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.one}>One</Text>
      <Text style={styles.two}>two</Text>

      <Text style={styles.three}>three</Text>

      <Text style={styles.four}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection:"row",
    justifyContent:"space-around",
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  one: {
    backgroundColor: "violet",
    padding: 10,
  },
  two: {
    backgroundColor: "gold",
    padding: 10,
  },
  three: {
    backgroundColor: "coral",
    padding: 10,
  },
  four: {
    backgroundColor: "skyblue",
    padding: 10,
  },
});
