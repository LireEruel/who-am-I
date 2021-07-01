import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/components/screens/HomeScreen";
import DetailScreen from "./src/components/screens/DetailScreen";
import { useFonts } from "expo-font";
import fonts from "./src/data/fonts";

const Stack = createStackNavigator();

function App() {
  const [loaded] = useFonts(fonts);

  return !loaded ? null : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
