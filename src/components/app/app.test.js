import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(<App
    count={4}
    time={7}
    onClick={jest.fn()}
  />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
