import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/app/app.jsx';
const init = () => {
  const settings = {
    gameTime: 7,
    errorCount: 4,
    letsStartGame() {},
  };
  ReactDOM.render(<App
    count={settings.errorCount}
    time={settings.gameTime}
    letsStartGame={settings.letsStartGame}
  />, document.querySelector(`#root`));
};
init();
