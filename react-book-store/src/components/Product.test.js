import React from "react";
import Product from "./Product";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const addToCart = jest.fn();
  const component = shallow(<Product addToCart={addToCart} title="Test" />);
  expect(component.text()).toEqual(
    "Testby: Published: , Language: Pages: Price: $Add to Cart"
  );
});
