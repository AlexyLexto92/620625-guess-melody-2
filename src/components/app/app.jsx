import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from './../welcome-screen/welcome-screen.jsx';
import {GenreQuestionScreen} from './../genre-question-screen/genre-question-screen.jsx';
import {SongQuestionScreen} from './../song-question-screen/song-question-screen.jsx';

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      question: -1,
      genreUnsvers: {
        pop: 0,
        jazz: 0,
        rock: 0
      },
      songUnvers: {
        unswer: ``
      },
    };

    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.radioHendler = this.radioHendler.bind(this);
    this.onAnsverHendler = this.onAnsverHendler.bind(this);
  }
  static getScreen(question, props, onAnsverHendler, checkboxHandler, radioHendler) {
    if (question === -1) {
      const {
        time,
        count
      } = props;
      return <WelcomeScreen
        time={time}
        count={count}
        letsStartGame={onAnsverHendler}
      />;
    }
    if (question === 0) {
      const {questions} = props;
      return <GenreQuestionScreen
        question={questions[question]}
        onAnsverHendler={onAnsverHendler}
        checkboxHandler={checkboxHandler}
      />;
    }
    const {questions} = props;
    return <SongQuestionScreen
      question={questions[question]}
      radioHendler={radioHendler}
      onAnsverHendler={onAnsverHendler}
    />;

  }

  render() {
    const {question} = this.state;
    return App.getScreen(question, this.props, this.onAnsverHendler, this.checkboxHandler, this.radioHendler);
  }
  onAnsverHendler() {
    const {questions} = this.props;
    this.setState((prevState) => {
      const nextIndex = prevState.question + 1;
      const isEnd = nextIndex >= questions.length;
      return {
        question: !isEnd ? nextIndex : -1,
      };
    });
  }

  checkboxHandler(evt) {
    const target = evt.target;
    if (target.type !== `checkbox`) {
      return;
    }

    this.setState((prevState) => {
      const value = target.checked
        ? (prevState.genreUnsvers[target.value] + 1)
        : (prevState.genreUnsvers[target.value] - 1);
      const genreUnsvers = Object.assign({}, this.state.genreUnsvers, {[target.value]: value});
      return Object.assign({}, this.state, {genreUnsvers});
    });
  }

  radioHendler(evt) {
    const target = evt.target;
    const value = target.type === `radio` && target.checked ? target.value : ``;
    this.setState({songUnvers: {unswer: value}});
  }
}
App.propTypes = {
  time: PropTypes.number,
  count: PropTypes.number,
  letsStartGame: PropTypes.func,
  questions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        genre: PropTypes.string,
        song: PropTypes.shape({
          artist: PropTypes.string,
          src: PropTypes.string,
        }),
        answers: PropTypes.arrayOf(
            PropTypes.shape({
              artist: PropTypes.string,
              src: PropTypes.string,
              genre: PropTypes.string,
              picture: PropTypes.string,
            })
        )
      }))
};
