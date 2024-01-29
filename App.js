import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Start from "./screens/Start";
import { useState } from "react";

export default function App() {
  const [screen, setScreen] = useState("start");

  function switchScreen(newScreen) {
    setScreen(newScreen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(245, 245, 245, 0.8)", "transparent"]}
        style={styles.background}
      />
      <Start></Start>
      {/* {screen === "start" && (
        <Start switchScreen={switchScreen} style={styles.screen} />
      )}
      {screen === "game" && (
        <Game switchScreen={switchScreen} style={styles.screen} />
      )}
      {screen === "final" && (
        <Final switchScreen={switchScreen} style={styles.screen} />
      )} */}
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
