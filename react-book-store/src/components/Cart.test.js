import React from "react";
import Cart from "./Cart";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const component = shallow(<Cart inCart={[]} />);
});
