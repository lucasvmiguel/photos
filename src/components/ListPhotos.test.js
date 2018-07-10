import React from "react";
import { shallow } from "enzyme";

import ListPhotos from "./ListPhotos";

const photos = [
  { url: "http://test/test.jpg", title: "title", id: 1 },
  { url: "http://test/test.jpg", title: "title", id: 2 }
];

const componentNotLoading = shallow(
  <ListPhotos photos={photos} loading={false} error={null} />
);

const componentLoading = shallow(
  <ListPhotos photos={photos} loading={true} error={null} />
);

describe("ListPhotos", () => {
  it("renders component not loading correctly", () => {
    const scroll = componentNotLoading.find("ScrollView");
    const flatList = componentNotLoading.find("FlatList");
    const loading = componentNotLoading.find("Loading");

    expect(scroll.length).toBe(1);
    expect(flatList.length).toBe(1);
    expect(loading.length).toBe(0);
  });

  it("renders component loading correctly", () => {
    const scroll = componentLoading.find("ScrollView");
    const flatList = componentLoading.find("FlatList");
    const loading = componentLoading.find("Loading");

    expect(scroll.length).toBe(1);
    expect(flatList.length).toBe(1);
    expect(loading.length).toBe(1);
  });
});
