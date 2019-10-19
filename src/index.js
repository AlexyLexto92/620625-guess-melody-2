import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/app/app.jsx';
const init = () => {
  const settings = {
    gameTime: 7,
    errorCount: 4,
  };
  const letsStartGame = () => { };
  ReactDOM.render(<App
    count={settings.errorCount}
    time={settings.gameTime}
    letsStartGame={letsStartGame}
  />, document.querySelector(`#root`));
};
init();
