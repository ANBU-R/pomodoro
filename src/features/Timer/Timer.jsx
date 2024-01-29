import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ticking from "../../assets/ticking.wav";

let timer;
const audio = new Audio(ticking);

const Timer = ({ min }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(min);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    clearInterval(timer);
    setSeconds(0);
    setMinutes(min);
  }, [min]);
  const startTimer = () => {
    let intervalSeconds = seconds;
    let intervalMinutes = minutes;
    setIsTimerRunning(true);

    timer = setInterval(() => {
      if (intervalSeconds === 0 && intervalMinutes === 0) {
        audio.pause();
        setIsTimerRunning(false);
        clearInterval(timer);
        resetTimer();
      } else if (intervalSeconds === 0) {
        audio.play();
        setSeconds(59);
        intervalSeconds = 59;
        intervalMinutes -= 1;
        setMinutes(intervalMinutes);
      } else {
        audio.play();
        intervalSeconds -= 1;
        setSeconds(intervalSeconds);
      }
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timer);
    audio.pause();
    setIsTimerRunning(false);
  };
  const resetTimer = () => {
    clearInterval(timer);
    audio.pause();
    setIsTimerRunning(false);
    setSeconds(0);
    setMinutes(min);
  };
  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="flex flex-col w-80 items-center">
      <section className="timer">
        <p>{minutes < 10 ? `0${minutes}` : minutes}</p>
        <p>:</p>
        <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
      </section>
      <section className="control-buttons">
        {isTimerRunning ? (
          <button className="control-button bg-violet-900" onClick={stopTimer}>
            Stop
          </button>
        ) : (
          <button className="control-button bg-green-900" onClick={startTimer}>
            Start
          </button>
        )}
        <button className="control-button bg-red-600" onClick={resetTimer}>
          Reset
        </button>
      </section>
    </div>
  );
};

Timer.propTypes = {
  min: PropTypes.number.isRequired,
};

export default Timer;
