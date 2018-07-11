import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Lightbox from "react-native-lightbox";
import PropTypes from "prop-types";

const WINDOW_WIDTH = Dimensions.get("window").width;
const BASE_PADDING = 10;

/**
 * Render the image with the title, image clickable (full-screen)
 */
const Photo = ({ title, imageUrl }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

Photo.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    height: WINDOW_WIDTH
  },
  text: {
    paddingBottom: 20,
    marginVertical: 20
  },
  title: {
    textAlign: "center"
  }
});

export default Photo;
