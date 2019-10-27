import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SongQuestionScreen} from './song-question-screen';
Enzyme.configure({adapter: new Adapter()});

it(`callback function correct run`, () => {
  const onChange = jest.fn();
  const songquestionscreen = shallow(<SongQuestionScreen

    onAnsverHendler={onChange}
    question={
      {
        type: `artist`,
        song: {
          artist: `Jim Beam`,
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        },
        answers: [
          {
            picture: `http://placehold.it/134x134`,
            artist: `John Snow`,
          },
          {
            picture: `http://placehold.it/134x134`,
            artist: `Jack Daniels`,
          },
          {
            picture: `http://placehold.it/134x134`,
            artist: `Jim Beam`,
          },
        ],
      }
    }
  />);
  const button = songquestionscreen.find(`form`);
  button.simulate(`change`, {unswer: `John Snow`
  });
  expect(onChange).toHaveBeenCalledWith({unswer: `John Snow`});
});
