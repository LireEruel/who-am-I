import React, { useState } from "react";
import {
  Dimensions,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../styles/styles";
import { ScrollView } from "react-native-gesture-handler";
import SkillView from "../common/SkillView";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Card from "../common/Card";
import StoryData from "../../data/data";
import Carousel from "../common/Carousel";

const Layout = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

const classes = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.BLACK.DARKBLUE,
    paddingTop: Layout.height * 0.15,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 30,

    color: COLORS.WHITE.WHITE,
    fontFamily: "NotoSans_Bold",
    marginTop: Layout.height * 0.1,
  },
  text: {
    fontSize: 15,
    color: COLORS.WHITE.WHITE,
    marginTop: Layout.height * 0.02,
    marginHorizontal: Layout.width * 0.05,
    textAlign: "center",
    fontFamily: "NotoSans_Thin",
  },
});

const DetailScreen = ({ route }) => {
  const { title, text, imageList } = route.params;
  return (
    <View style={classes.container}>
      <Text style={classes.title}>{title}</Text>
      <Text style={classes.text}>{text}</Text>
      <Carousel data={imageList} />
    </View>
  );
};

export default DetailScreen;
