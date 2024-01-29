import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Checkbox from "expo-checkbox";

export default function Start({
  name,
  setName,
  number,
  setNumber,
  isChecked,
  setChecked,
  checkNumberHandler,
  setGameModalVisible,
}) {
  const title = "Guess My Number";
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");

  function changeNameHandler(changedName) {
    setName(changedName);
    setNameError(""); // Clear error when name changes
  }

  function changeNumberHandler(changedNumber) {
    setNumber(changedNumber);
    setNumberError(""); // Clear error when number changes
  }

  function validateInputs() {
    // Validate name
    const isNameValid = name.length > 1 && !/\d/.test(name);
    if (!isNameValid) {
      setNameError("Please enter a valid name");
    }

    // Validate number
    const parsedNumber = parseInt(number);
    const isNumberValid =
      !isNaN(parsedNumber) && parsedNumber >= 1020 && parsedNumber <= 1029;
    if (!isNumberValid) {
      setNumberError("Please enter a valid number");
    }

    // Check if both inputs are valid
    if (isNameValid && isNumberValid) {
      confirmHandler();
    }
  }

  function confirmHandler() {
    checkNumberHandler();
    setGameModalVisible(true); // Set the Game modal to be visible
  }

  function resetHandler() {
    setName("");
    setNumber("");
    setChecked(false);
    setNameError("");
    setNumberError("");
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
        {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

        <Text style={styles.label}>Enter a Number</Text>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={changeNumberHandler}
          keyboardType="numeric"
          maxLength={4}
        />
        {numberError ? (
          <Text style={styles.errorText}>{numberError}</Text>
        ) : null}

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
    marginBottom: 5,
  },
  checkboxContainer: { flexDirection: "row", marginVertical: 30 },
  checkboxText: { marginStart: 5, color: "purple" },
  buttonsContainer: { flexDirection: "row" },
  buttonView: { width: "40%", margin: 5 },
  errorText: {
    color: "black",
    margin: 3,
  },
});
