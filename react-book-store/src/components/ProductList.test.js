import React from "react";
import ProductList from "./ProductList";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const component = shallow(<ProductList products={[]} />);
  expect(component.text()).toEqual("");
});
