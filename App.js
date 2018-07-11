import React, { Component } from "react";

import { StyleSheet, View, Platform } from "react-native";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import PhotosContainer from "./src/containers/photos.container";
import { store, persistor } from "./src/store";

const PADDING_TOP_STATUS_BAR_IOS = 18;
const PADDING_TOP_STATUS_BAR_ANDROID = 24;
const paddingTop =
  Platform.OS === "ios"
    ? PADDING_TOP_STATUS_BAR_IOS
    : PADDING_TOP_STATUS_BAR_ANDROID;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <PhotosContainer />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: paddingTop,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch"
  }
});

export default App;
