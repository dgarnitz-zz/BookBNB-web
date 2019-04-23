import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import renderer from "react-test-renderer";

test("test_one", () => {
  const component = renderer.create(<LoadingSpinner />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
