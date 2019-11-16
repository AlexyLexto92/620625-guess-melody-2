import React from 'react';
import ReactDOM from 'react-dom';
import {questions} from './mocks/questions';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer.js'
import {App} from './components/app/app.jsx';

const init = (gameQuestions) => {
  const store = createStore(reducer);
  console.log(store.getState());
  const settings = {
    gameTime: 7,
    errorCount: 4,
  };
  ReactDOM.render(
  <Provider store={store}>
    <App
    count={settings.errorCount}
    time={settings.gameTime}
    questions = {gameQuestions}
    />
  </Provider>, document.querySelector(`#root`));
};
init(questions);
