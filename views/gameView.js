import React, { useState } from "react";
import { View, Text } from "react-native";

export default function (props) {
  return (
    <View>
      <Text>El jugador 1 es {props.player1}</Text>
      <Text>El jugador 2 es {props.player2}</Text>
    </View>
  );
}
