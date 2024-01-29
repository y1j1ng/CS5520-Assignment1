import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Start() {
  const title = "Guess My Number";
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function changeNameHandler(changedName) {
    setName(changedName);
  }

  function changeNumberHandler(changedNumber) {
    setNumber(changedNumber);
  }

  function confirmHandler() {}

  function resetHandler() {
    setName("");
    setNumber("");
  }

  return (
    <View style={styles.container}>
      <Header style={styles.header} title={title} />
      <Card style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={changeNameHandler}
        />

        <Text style={styles.label}>Enter a Number</Text>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={changeNumberHandler}
          keyboardType="numeric"
          maxLength={4}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonView}>
            <Button title="Reset" onPress={resetHandler} />
          </View>
          <View style={styles.buttonView}>
            <Button title="Confirm" onPress={confirmHandler} />
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  card: {
    flex: 9,
  },
  label: { fontSize: 20, color: "purple", margin: 5 },
  input: {
    fontSize: 20,
    fontWeight: "bold",
    color: "purple",
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    padding: 10,
    marginBottom: 20,
  },
  buttonsContainer: { flexDirection: "row" },
  buttonView: { width: "40%", margin: 5 },
});
