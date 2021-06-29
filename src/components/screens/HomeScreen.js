import React, { useState } from "react";
import {
  Dimensions,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  IconButton,
} from "react-native";
import { COLORS } from "../../styles/styles";
import { ScrollView } from "react-native-gesture-handler";
import SkillView from "../common/SkillView";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Layout = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

const classes = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK.DARKBLUE,
  },
  topView: {
    backgroundColor: COLORS.GREY.BRIGHT_YELLOW_GREY,
    paddingBottom: Layout.height * 0.07,
    borderBottomLeftRadius: Layout.width * 0.1, // 왼쪽 아래 둥글게 처리, borderBottomRadius는 없어서 왼쪽 오른쪽 각각 적용.
    borderBottomRightRadius: Layout.width * 0.1,
  },
  profileView: {
    flexDirection: "row",
    paddingHorizontal: 32,
    marginTop: 70,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.BLACK.DARKBLUE,
  },
  job: {
    fontSize: 17,
    color: COLORS.GREY.BRIGHT_GREY,
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={classes.container}>
      <View style={classes.topView}>
        <View style={classes.profileView}>
          <Image
            style={classes.image}
            source={require("../../../assets/images/logo.png")}
          />
          <View>
            <Text style={classes.name}>Jeong Seo Hee</Text>
            <Text style={classes.job}>React Native Dev</Text>
          </View>
        </View>
        <SkillView />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
