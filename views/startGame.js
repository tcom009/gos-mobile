import React, { useState } from "react";
import { TextInput, Button, View, Text } from "react-native";
export default function StartGame(props) {
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();

  return (
    <View>
      <Text>Inicia un nuevo juego</Text>
      <View>
        <TextInput
          placeholder={"Jugador 1 - Impares"}
          value={player1}
          onChangeText={(player1) => setPlayer1(player1.toUpperCase())}
        />
      </View>
      <View>
        <TextInput
          placeholder={"Jugador 2 - Pares"}
          value={player2}
          onChangeText={(player2) => setPlayer2(player2.toUpperCase())}
        />
      </View>
      <Button
        title={"Iniciar "}
        onPress={() => props.navigation.push("Principal")}
      />
    </View>
  );
}
