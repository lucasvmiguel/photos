import React from "react";
import { shallow } from "enzyme";

import Photo from "./Photo";

const component = shallow(
  <Photo imageUrl="http://test/test.jpg" title="test" />
);

describe("Photo", () => {
  it("renders component correctly", () => {
    const lightbox = component.find("Lightbox");
    const image = component.find("Image");
    const title = component.find("Text").dive();

    expect(lightbox.length).toBe(1);
    expect(image.length).toBe(1);
    expect(title.text()).toBe("test");
  });
});
