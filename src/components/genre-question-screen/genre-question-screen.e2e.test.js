import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreQuestionScreen} from './genre-question-screen';
Enzyme.configure({adapter: new Adapter()});

it(`callback function correct run`, () => {
  const onChange = jest.fn();
  const genrequestionscreen = shallow(< GenreQuestionScreen

    checkboxHandler={onChange}
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
  />);
  const button = genrequestionscreen.find(`input`).first(); button.simulate(`change`, {
    pop: 0,
    jazz: 0,
    rock: 0
  }); expect(onChange).toHaveBeenCalledWith({
    pop: 0,
    jazz: 0,
    rock: 0
  });
});
