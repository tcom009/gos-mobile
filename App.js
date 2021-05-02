import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PrincipalPage from "./views/principal";
import StartGame from "./views/startGame";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen
          name="Principal"
          component={PrincipalPage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Start" component={StartGame} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
export default App;
