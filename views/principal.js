import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function PrincipalPage(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wecome to</Text>
      <Text style={styles.textHeavy}>Chaos Game of S.K.A.T</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Nuevo Gos"
          color="blue"
          onPress={() => navigation.push("Start")}
        >
          <Text style={{ color: "purple" }}>Nuevo G.O.S</Text>
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "yellow",
    fontSize: 30,
    textAlign: "center",
  },
  textHeavy: {
    color: "yellow",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    margin: 20,
  },
});
