import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Start from "./screens/Start";
import Game from "./screens/Game";
import Final from "./screens/Final";
import { useState, useEffect } from "react";

export default function App() {
  const [gameState, setGameState] = useState("start"); // Possible values: 'start', 'final'
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [attempts, setAttempts] = useState(2); // Number of attempts allowed
  const [isWinner, setIsWinner] = useState(false);
  const [myNumber, setMyNumber] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [isGameModalVisible, setGameModalVisible] = useState(false);

  useEffect(() => {
    // Generate myNumber only once when the component mounts
    setMyNumber(getRandomNumber());
  }, []);

  function getRandomNumber() {
    const num = Math.floor(Math.random() * 10) + 1020;
    console.log(num);
    return num;
  }

  function checkNumberHandler() {
    if (parseInt(number) === parseInt(myNumber)) {
      setIsWinner(true);
    } else if (parseInt(number) < parseInt(myNumber)) {
      setFeedback("higher");
    } else {
      setFeedback("lower");
    }
  }

  function gameFinishHandler() {
    setGameState("final");
  }

  function resetGameHandler() {
    setName("");
    setNumber("");
    setAttempts(2);
    setIsWinner(false);
    setMyNumber(getRandomNumber());
    setGameState("start");
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(245, 245, 245, 0.8)", "transparent"]}
        style={styles.background}
      />
      {gameState === "start" && (
        <Start
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          checkNumberHandler={checkNumberHandler}
          setGameModalVisible={setGameModalVisible}
        />
      )}
      <Game
        isGameModalVisible={isGameModalVisible}
        name={name}
        number={number}
        myNumber={myNumber}
        feedback={feedback}
        attempts={attempts}
        setAttempts={setAttempts}
        isWinner={isWinner}
        onGameFinish={gameFinishHandler}
        setGameModalVisible={setGameModalVisible}
      />
      {gameState === "final" && <Final isWinner={isWinner} />}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "mediumorchid",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    height: null,
  },
});
