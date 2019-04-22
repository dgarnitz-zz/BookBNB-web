import React from 'react';
import AvailableColumn from './AvailableColumn';
import renderer from 'react-test-renderer';

test('test_one', () => {
  const component = renderer.create(
    <AvailableColumn />
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
