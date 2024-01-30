import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../components/Card";
import StyledButton from "../components/StyledButton";

export default function Game({
  name,
  number,
  feedback,
  attempts,
  setAttempts,
  isWinner,
  setChecked,
  onGameFinish,
  isGameModalVisible,
  setGameModalVisible,
}) {
  function handleContinue() {
    setAttempts(attempts - 1);
    setGameModalVisible(false);
    setChecked(false);
  }

  function handleFinish() {
    setGameModalVisible(false);
    onGameFinish();
  }
  return (
    <Modal visible={isGameModalVisible} animationType="fade">
      <LinearGradient
        colors={["rgba(245, 245, 245, 0.8)", "mediumorchid"]}
        style={styles.background}
      >
        <View style={styles.container}>
          <Card style={styles.card}>
            {isWinner ? (
              <View>
                <Text style={styles.feedback}>Congrats {name}! You won!</Text>
                <StyledButton title="Thank You" onPress={handleFinish} />
              </View>
            ) : (
              <View>
                <Text
                  style={styles.feedback}
                >{`Hello ${name}\nYou have chosen ${number}\nThat's not my number!\nGuess ${feedback}!\nYou have ${attempts} attempts left!`}</Text>
                <StyledButton
                  title="I am done"
                  onPress={handleFinish}
                  color={"red"}
                />
                <View style={styles.buttonView}>
                  <Button
                    title="Let Me Guess Again"
                    onPress={handleContinue}
                    disabled={attempts === 0}
                  />
                </View>
              </View>
            )}
          </Card>
        </View>
      </LinearGradient>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    padding: 20,
    alignItems: "center",
  },
  feedback: {
    fontSize: 20,
    color: "purple",
    textAlign: "center",
  },
  background: {
    height: "100%",
  },
  buttonView: {
    margin: 5,
    width: "auto",
  },
});
