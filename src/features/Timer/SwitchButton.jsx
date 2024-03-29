import { POMODORO, SHORT, LONG } from "../../const.js";
import PropTypes from "prop-types";

const SwitchButton = ({ currTimer, setCurrTimer }) => {
  return (
    <section className="time-buttons">
      <button
        className={
          currTimer === POMODORO ? "time-button active" : "time-button"
        }
        disabled={currTimer === POMODORO}
        onClick={() => setCurrTimer(POMODORO)}
      >
        Pomodoro
      </button>
      <button
        className={currTimer === SHORT ? "time-button active" : "time-button"}
        disabled={currTimer === SHORT}
        onClick={() => setCurrTimer(SHORT)}
      >
        Short Break
      </button>
      <button
        disabled={currTimer === LONG}
        className={currTimer === LONG ? "time-button active" : "time-button"}
        onClick={() => setCurrTimer(LONG)}
      >
        Long Break
      </button>
    </section>
  );
};

SwitchButton.propTypes = {
  currTimer: PropTypes.string.isRequired,
  setCurrTimer: PropTypes.func.isRequired,
};
export default SwitchButton;
