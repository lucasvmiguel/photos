import React from "react";
import { shallow } from "enzyme";

import Loading from "./Loading";

const component = shallow(<Loading />);

describe("Loading", () => {
  it("renders component correctly", () => {
    const spinner = component.find("ActivityIndicator");
    expect(spinner.length).toBe(1);
  });
});
