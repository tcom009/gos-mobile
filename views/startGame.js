import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Text } from "react-native";
export default function StartGame(props) {
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();

  return (
    <View>
      <Text>Inicia un nuevo juego</Text>
      <View>
        <TextInput
          style={styles.input}
          label={"Jugador 1"}
          placeholder="Impares"
          onChangeText={(player1) => setPlayer1(player1)}
          defaultValue={player1}
          autoCapitalize="sentences"
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          label={"Jugador 2"}
          placeholder="Pares"
          onChangeText={(player2) => setPlayer2(player2)}
          defaultValue={player2}
          autoCapitalize="characters"
        />
      </View>
      <Button
        title={"Iniciar "}
        onPress={() => props.navigation.push("Principal")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, height: 40, margin: 12 },
});
