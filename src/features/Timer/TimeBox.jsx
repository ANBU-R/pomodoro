import { useState } from "react";
import { useSelector } from "react-redux";
import "./timeBox.css";
import Timer from "./Timer";
import { POMODORO, SHORT, LONG } from "./Const.js";
import SwitchButton from "./SwitchButton.jsx";

const TimeBox = () => {
  const [currTimer, setCurrTimer] = useState(POMODORO);
  const { pomodoro, shortBreak, longBreak } = useSelector(
    (store) => store.timer
  );
  return (
    <section className="time-box">
      <SwitchButton currTimer={currTimer} setCurrTimer={setCurrTimer} />
      <section>
        {currTimer === POMODORO && <Timer key={1} min={pomodoro} />}
        {currTimer === SHORT && <Timer key={2} min={shortBreak} />}
        {currTimer === LONG && <Timer key={3} min={longBreak} />}
      </section>
    </section>
  );
};
export default TimeBox;
