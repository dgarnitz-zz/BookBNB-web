import React from "react";
import BookListItem from "./BookListItem";
import renderer from "react-test-renderer";

test("test_one", () => {
  const component = renderer.create(<BookListItem />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
