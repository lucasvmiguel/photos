import React, { Fragment } from "react";
import { View, Text, FlatList, List, StyleSheet } from "react-native";

const ListPhotos = ({ photos, loading, error }) => {
  return (
    <View style={styles.container}>
      <Text>{loading}</Text>
      <Text>{error}</Text>
      <Text>TESTE</Text>
      <FlatList data={photos} renderItem={({ url }) => <Text>{url}</Text>} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ListPhotos;
