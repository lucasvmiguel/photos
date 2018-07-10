import React, { Fragment } from "react";

import { Text, View, FlatList, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import Photo from "./Photo";

const ListPhotos = ({ photos, loading, error }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <Photo key={item.id} imageUrl={item.url} title={item.title} />
        )}
      />
    </View>
  );
};

ListPhotos.propTypes = {
  photos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignSelf: "stretch"
  }
});

export default ListPhotos;
