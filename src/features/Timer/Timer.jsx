import { useEffect, useState } from "react";
let timer;
const Timer = ({ min }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(min);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const startTimer = () => {
    let intervalSeconds = seconds;
    let intervalMinutes = minutes;
    setIsTimerRunning(true);
    timer = setInterval(() => {
      if (intervalSeconds === 0 && intervalMinutes === 0) {
        clearInterval(timer);
      } else if (intervalSeconds === 0) {
        setSeconds(59);
        intervalSeconds = 59;
        intervalMinutes -= 1;
        setMinutes(intervalMinutes);
      } else {
        intervalSeconds -= 1;
        setSeconds(intervalSeconds);
      }
    }, 1000);
    console.log(timer);
  };
  const stopTimer = () => {
    clearInterval(timer);
    setIsTimerRunning(false);
  };
  const resetTimer = () => {
    clearInterval(timer);
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
export default Timer;
