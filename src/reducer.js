const startState ={
  step: -1,
  mistakes: 0,
}
const ActionType ={
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET: `RESET`,
}
const isArtistAnswerCorrect = (onAnsverHendler, questions) =>
  onAnsverHendler.artist === questions.song.artist;

  const isGenreAnswerCorrect = (onAnsverHendler, questions) =>
  onAnsverHendler.every((it, i) => it === (
    questions.answers[i].genre === questions.genre
  ));

  const ActionCreator = {
    incrementStep: () => ({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    }),
  
    incrementMistake: (onAnsverHendler, questions) => {
      let answerIsCorrect = false;
  
      switch (questions.type) {
        case `artist`:
          answerIsCorrect = isArtistAnswerCorrect(onAnsverHendler, questions);
          break;
        case `genre`:
          answerIsCorrect = isGenreAnswerCorrect(onAnsverHendler, questions);
          break;
      }
  
      return {
        type: ActionType.INCREMENT_MISTAKES,
        payload: answerIsCorrect ? 0 : 1,
      };
    },
  
    resetGame: () => {
      return {
        type: ActionType.RESET
      };
    },
  };
  
  const reducer = (state = startState, action) => {
    switch (action.type) {
      case ActionType.INCREMENT_STEP:
        return Object.assign({}, state, {
          step: state.step + action.payload,
        });
  
      case ActionType.INCREMENT_MISTAKES:
        return Object.assign({}, state, {
          mistakes: state.mistakes + action.payload,
        });
  
      case ActionType.RESET:
        return Object.assign({}, startState);
    }
  
    return state;
  };
  
  export {
    ActionCreator,
    ActionType,
    isArtistAnswerCorrect,
    isGenreAnswerCorrect,
    reducer,
  };