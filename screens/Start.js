import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Checkbox from "expo-checkbox";

export default function Start() {
  const title = "Guess My Number";
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isChecked, setChecked] = useState(false);

  function changeNameHandler(changedName) {
    setName(changedName);
  }

  function changeNumberHandler(changedNumber) {
    setNumber(changedNumber);
  }

  function validateInputs(inputName, inputNumber) {
    // Validate name
    const isNameValid = inputName.length > 1 && !/\d/.test(inputName);

    // Validate number
    const parsedNumber = parseInt(inputNumber);
    const isNumberValid =
      !isNaN(parsedNumber) && parsedNumber >= 1020 && parsedNumber <= 1029;

    if (isNameValid && isNumberValid) {
      confirmHandler;
    } else {
    }
  }

  function confirmHandler() {}

  function resetHandler() {
    setName("");
    setNumber("");
    setChecked(false);
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

        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.checkboxText}>I am not a robot</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonView}>
            <Button title="Reset" onPress={resetHandler} color={"red"} />
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Confirm"
              onPress={validateInputs}
              color={isChecked ? "blue" : "white"}
              disabled={!isChecked}
            />
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
  checkboxContainer: { flexDirection: "row" },
  checkboxText: { marginStart: 5, color: "purple" },
  buttonsContainer: { flexDirection: "row" },
  buttonView: { width: "40%", margin: 5 },
});
