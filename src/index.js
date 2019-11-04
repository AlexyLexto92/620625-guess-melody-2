import React from 'react';
import ReactDOM from 'react-dom';
import {questions} from './mocks/questions';

import {App} from './components/app/app.jsx';
const init = (gameQuestions) => {
  const settings = {
    gameTime: 7,
    errorCount: 4,
  };
  ReactDOM.render(<App
    count={settings.errorCount}
    time={settings.gameTime}
    questions = {gameQuestions}
  />, document.querySelector(`#root`));
};
init(questions);
