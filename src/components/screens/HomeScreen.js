import React, { useState } from "react";
import {
  Dimensions,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { COLORS } from "../../styles/styles";
import { ScrollView } from "react-native-gesture-handler";
import SkillView from "../common/SkillView";
import { AntDesign } from "@expo/vector-icons";
import Card from "../common/Card";
import StoryData from "../../data/data";

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
    paddingBottom: Layout.height * 0.05,
    borderBottomLeftRadius: Layout.width * 0.1,
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
    fontFamily: "Roboto_Bold",
    color: COLORS.BLACK.DARKBLUE,
  },
  job: {
    fontSize: 17,
    fontFamily: "Roboto_Regular",
    color: COLORS.GREY.BRIGHT_GREY,
  },
  caret: {
    marginLeft: 30,
    marginBottom: 30,
  },
  contextView: {
    marginLeft: 30,
    marginTop: 30,
  },
  contectTitle: {
    fontFamily: "NotoSans_Bold",
    marginBottom: 10,
    fontSize: 17,
  },
  contectText: {
    fontFamily: "NotoSans_Regular",
    marginTop: 5,
    fontSize: 15,
  },
  card: {
    backgroundColor: COLORS.WHITE.WHITE,
    height: 200,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: Layout.width * 0.03,
  },
});

const HomeScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <View style={classes.container}>
      <View style={classes.topView}>
        <View style={classes.profileView}>
          <Image
            style={classes.image}
            source={require("../../../assets/images/logo.png")}
          />
          <View>
            <Text style={classes.name}>Seohee Jeong</Text>
            <Text style={classes.job}>Front-end Dev</Text>
          </View>
          {open ? (
            <TouchableOpacity style={classes.caret} onPress={handleClose}>
              <AntDesign name="caretup" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={classes.caret} onPress={handleOpen}>
              <AntDesign name="caretdown" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
        {open ? (
          <View>
            <SkillView />
            <View style={classes.contextView}>
              <Text style={classes.contectTitle}>Contect Me</Text>
              <Text style={classes.contectText}>
                Email : jsh001505@naver.com
              </Text>
              <Text
                style={classes.contectText}
                onPress={() => Linking.openURL("https://github.com/LireEruel")}
              >
                Github : https://github.com/LireEruel
              </Text>
            </View>
          </View>
        ) : null}
      </View>
      <ScrollView style={classes.scrollView}>
        {StoryData.map((story, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push("Detail", {
                title: story.title,
                text: story.text,
                imageList: story.imageList,
              })
            }
          >
            <Card title={story.title} text={story.text} image={story.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
