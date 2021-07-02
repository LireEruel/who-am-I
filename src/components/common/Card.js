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

const Layout = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

const classes = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: COLORS.WHITE.WHITE,
    height: Layout.height * 0.3,
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: Layout.width * 0.03,
  },
  textView: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  image: {
    width: "100%",
    height: Layout.height * 0.2,
    borderBottomLeftRadius: Layout.width * 0.03,
    borderBottomRightRadius: Layout.width * 0.03,
  },
  title: {
    fontSize: 25,
    fontFamily: "NotoSans_Bold",
    paddingBottom: 5,
  },
  text: {
    fontSize: 12,
    color: COLORS.GREY.BRIGHT_GREY,
    fontFamily: "NotoSans_Regular",
    lineHeight: 17,
  },
});

const Card = (props) => {
  const text = props.text;
  const image = props.image;
  const title = props.title;
  return (
    <View style={classes.card}>
      <View style={classes.textView}>
        <Text style={classes.title}>{title}</Text>
        <Text numberOfLines={2} style={classes.text}>
          {text}
        </Text>
      </View>

      <View>
        <Image style={classes.image} source={image} />
      </View>
    </View>
  );
};

export default Card;
