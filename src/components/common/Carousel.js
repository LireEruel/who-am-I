import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("window");

const classes = StyleSheet.create({
  carousel: {
    backgroundColor: "yellow",
  },
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
  },
  imageView: {
    width: width * 0.8,
    height: height * 0.6,
    borderRadius: 10,
    margin: width * 0.1,
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    maxHeight: height * 0.6,
    maxWidth: width * 0.8,
    borderRadius: 10,
  },
});

const scrollX = new Animated.Value(0);
let position = Animated.divide(scrollX, width);

const Carousel = ({ data }) => {
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
                  backgroundColor: "#595959",
                  margin: 8,
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
