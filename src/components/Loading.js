import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

/**
 * Loading spinner
 */
const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Loading;
