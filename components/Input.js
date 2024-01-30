import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function Input({ label, value, onChangeText, error }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        maxLength={4}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 20, color: "purple", margin: 5 },
  input: {
    fontSize: 20,
    fontWeight: "bold",
    color: "purple",
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    padding: 10,
    marginBottom: 5,
  },
  errorText: {
    color: "black",
    margin: 3,
  },
});
