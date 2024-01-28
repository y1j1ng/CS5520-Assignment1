import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header({ screen }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{screen}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 25, color: "mediumorchid" },
});
