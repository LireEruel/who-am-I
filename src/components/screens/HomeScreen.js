import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../contexts/context";
import ScreenContainer from "react-native-screens";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="React Native by Example"
        onPress={() =>
          navigation.push("Details", { name: "React Native by Example " })
        }
      />
    </View>
  );
};

export default HomeScreen;
