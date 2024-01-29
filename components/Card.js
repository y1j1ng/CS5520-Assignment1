import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Card({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "darkgrey",
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "grey",
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  content: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
