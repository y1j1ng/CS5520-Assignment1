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
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={changeNameHandler}
        />

        <Text>Enter a Number</Text>
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
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "50%",
  },
  buttonsContainer: { flexDirection: "row" },
  buttonView: { width: "30%", margin: 5 },
});
