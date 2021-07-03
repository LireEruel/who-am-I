import React from "react";
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../styles/styles";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../common/Carousel";

const Layout = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

const classes = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.BLACK.DARKBLUE,
    flex: 1,
    paddingTop: Layout.width * 0.1,
  },
  topView: {
    flex: 1,
  },
  carousel: {
    flex: 3,
  },
  title: {
    fontSize: 30,
    color: COLORS.WHITE.WHITE,
    fontFamily: "NotoSans_Bold",
    marginBottom: Layout.height * 0.03,
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    color: COLORS.WHITE.WHITE,
    marginHorizontal: Layout.width * 0.05,
    textAlign: "center",
    fontFamily: "NotoSans_Thin",
  },
  backButton: {
    padding: 10,
  },
});

const DetailScreen = ({ route, navigation }) => {
  const { title, text, imageList } = route.params;
  const goHome = () => {
    navigation.push("Home");
  };
  return (
    <View style={classes.container}>
      <View style={classes.topView}>
        <TouchableOpacity style={classes.backButton}>
          <AntDesign
            name="caretleft"
            size={24}
            color={COLORS.YELLOW.YELLOW}
            onPress={goHome}
          />
        </TouchableOpacity>

        <Text style={classes.title}>{title}</Text>
        <Text style={classes.text}>{text}</Text>
      </View>
      <View style={classes.carousel}>
        <Carousel data={imageList} />
      </View>
    </View>
  );
};

export default DetailScreen;
