import React from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from './../welcome-screen/welcome-screen.jsx';

export const App = ({time, count, letsStartGame}) => {
  return <WelcomeScreen
    time={time}
    count={count}
    letsStartGame = {letsStartGame}
  />;
};
App.propTypes = {
  time: PropTypes.number,
  count: PropTypes.number,
  letsStartGame: PropTypes.func
};
