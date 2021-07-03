import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  Image,
} from "react-native";
import { COLORS } from "../../styles/styles";
const Layout = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

const classes = StyleSheet.create({
  container: {
    paddingVertical: Layout.height * 0.05,
  },
  imageView: {
    maxWidth: Layout.width * 0.8,
    maxHeight: Layout.height * 0.5,
    borderRadius: 10,
    marginHorizontal: Layout.width * 0.1,
    justifyContent: "center",
  },
  image: {
    maxHeight: Layout.height * 0.5,
    maxWidth: Layout.width * 0.8,
    borderRadius: 10,
    resizeMode: "contain",
  },
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

const scrollX = new Animated.Value(0);

const Carousel = ({ data }) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, Layout.width);

  if (data && data.length) {
    return (
      <View style={classes.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={classes.imageView}>
                <Image style={classes.image} source={item.image} />
              </View>
            );
          }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } },
          ])}
        />
        <View style={classes.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: COLORS.YELLOW.YELLOW,
                  marginHorizontal: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
  console.log("이미지 없어용");
  return null;
};

export default Carousel;
