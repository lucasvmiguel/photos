import React, { Component } from "react";

import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Lightbox from "react-native-lightbox";
import PropTypes from "prop-types";

const WINDOW_WIDTH = Dimensions.get("window").width;
const BASE_PADDING = 10;

const Photo = ({ title, imageUrl }) => {
  return (
    <ScrollView>
      <Lightbox>
        <Image
          style={styles.contain}
          resizeMode="contain"
          source={{
            uri: imageUrl
          }}
        />
      </Lightbox>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </ScrollView>
  );
};

Photo.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    height: WINDOW_WIDTH,
    textAlign: "center"
  },
  text: {
    paddingTop: -20,
    paddingBottom: 20,
    marginVertical: 20
  },
  title: {
    textAlign: "center"
  }
});

export default Photo;
