import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";

export default function Final({ isWinner, myNumber, resetGameHandler }) {
  return (
    <View style={styles.container}>
      <Header title="Game is over" style={styles.header} />
      <Card style={styles.card}>
        <Text style={styles.text}>Here's your picture</Text>
        <View style={styles.imageView}>
          {isWinner ? (
            <Image
              style={styles.image}
              source={{
                uri: `https://picsum.photos/id/${myNumber}/100/100`,
              }}
            />
          ) : (
            <Image
              style={styles.image}
              source={require("../assets/sad_face.png")}
            />
          )}
        </View>
        <View style={styles.buttonView}>
          <Button title="Start Again" onPress={resetGameHandler} />
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
    justifyContent: "center",
    alignItems: "center",
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "purple",
    textAlign: "center",
  },
  buttonView: {
    margin: 5,
    width: "auto",
  },
});
