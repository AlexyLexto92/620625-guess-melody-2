import React from 'react';
import renderer from 'react-test-renderer';
import {GenreQuestionScreen} from './genre-question-screen.jsx';
import {createNodeMock} from '../test/tests.js';

it(`App correctly renders after relaunch`, () => {
  const options = {createNodeMock};
  const tree = renderer.create(<GenreQuestionScreen
    count={4}
    time={7}
    onClick={jest.fn()}
    question={
      {
        type: `genre`,
        genre: `rock`,
        answers: [{
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
          genre: `rock`,
        },
        {
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
          genre: `pop`,
        },
        {
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
          genre: `jazz`,
        },
        {
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
          genre: `rock`,
        }
        ],
      }
    }
  />,
  options
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
