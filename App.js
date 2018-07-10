import React from "react";

import { StyleSheet, Text, View, Platform } from "react-native";
import { Provider, connect } from "react-redux";

import PhotosContainer from "./src/containers/photos.container";
import store from "./src/store";

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <PhotosContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 18 : 24,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch"
  }
});
