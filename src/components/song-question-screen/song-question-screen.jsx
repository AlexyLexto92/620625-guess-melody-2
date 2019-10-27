import React from "react";
import PropTypes from "prop-types";
export const SongQuestionScreen = ({question, onAnsverHendler, radioHendler}) => {
  const {answers} = question;
  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>


        <div className="timer__value">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
          </div>
        </div>

        <form className="game__artist" onSubmit={(evt) => {
          evt.preventDefault();
          onAnsverHendler();
        }}>
          {answers.map((elem, it) =>
            <div className="artist" key={`answer-${it}`}>
              <input className="artist__input visually-hidden" type="radio" name={`answer-${it}`} value={elem.artist} id={`answer-${it}`} onChange={radioHendler} />
              <label className="artist__name" htmlFor={`answer-${it}`}>
                <img className="artist__picture" src={elem.picture} alt={elem.artist} />
                {elem.artist}
              </label>
            </div>
          )}
        </form>

      </section>
    </section>
  );
};

SongQuestionScreen.propTypes = {
  onAnsverHendler: PropTypes.func,
  radioHendler: PropTypes.func,
  question:
      PropTypes.shape({
        type: PropTypes.string,
        song: PropTypes.shape({
          artist: PropTypes.string,
          src: PropTypes.string,
        }),
        answers: PropTypes.arrayOf(
            PropTypes.shape({
              artist: PropTypes.string,
              picture: PropTypes.string,
            })
        )
      })
};
