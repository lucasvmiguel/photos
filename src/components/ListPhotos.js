import React, { Fragment } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  ScrollView
} from "react-native";
import PropTypes from "prop-types";

import Photo from "./Photo";
import Loading from "./Loading";

const ListPhotos = ({ photos, loading, error }) => {
  return (
    <ScrollView style={styles.container}>
      {loading && <Loading />}
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <Photo key={item.id} imageUrl={item.url} title={item.title} />
        )}
      />
    </ScrollView>
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
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ListPhotos;
