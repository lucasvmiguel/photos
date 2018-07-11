import React, { Fragment } from "react";
import { View, FlatList, StyleSheet, ScrollView } from "react-native";
import PropTypes from "prop-types";

import Photo from "./Photo";
import Loading from "./Loading";

/**
 * Render the loading spinner and render a photo component for each photo in array of photos
 */
const ListPhotos = ({ photos, loading, error }) => {
  return (
    <Fragment>
      {loading && (
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      )}
      <ScrollView style={styles.listContainer}>
        <FlatList
          data={photos}
          renderItem={({ item }) => (
            <Photo key={item.id} imageUrl={item.url} title={item.title} />
          )}
        />
      </ScrollView>
    </Fragment>
  );
};

ListPhotos.propTypes = {
  photos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignSelf: "stretch"
  },
  loadingContainer: {
    height: 50
  }
});

export default ListPhotos;
