import { COLORS } from "../../styles/styles";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";

const Layout = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

const skillIcons = [
  "react",
  "language-html5",
  "language-javascript",
  "language-css3",
  "language-java",
  "language-python",
];

const classes = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    backgroundColor: COLORS.WHITE.WHITE,
    borderBottomLeftRadius: Layout.width * 0.07, // 왼쪽 아래 둥글게 처리, borderBottomRadius는 없어서 왼쪽 오른쪽 각각 적용.
    borderBottomRightRadius: Layout.width * 0.07,
    borderTopLeftRadius: Layout.width * 0.07, // 왼쪽 아래 둥글게 처리, borderBottomRadius는 없어서 왼쪽 오른쪽 각각 적용.
    borderTopRightRadius: Layout.width * 0.07,
  },
  skillText: {
    fontSize: 20,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  skillList: {
    marginVertical: 5,
  },
  skillIcon: {
    color: COLORS.BLACK.DARKBLUE,
  },
  skillAtomView: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2.5,
    borderColor: COLORS.YELLOW.YELLOW,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
});

const SkillView = () => {
  return (
    <View style={classes.container}>
      <View>
        <Text style={classes.skillText}>Skills</Text>
      </View>
      <ScrollView horizontal style={classes.skillList}>
        {skillIcons.map((skill) => (
          <View style={classes.skillAtomView}>
            <MaterialCommunityIcons
              style={classes.skillIcon}
              name={skill}
              size={40}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SkillView;
