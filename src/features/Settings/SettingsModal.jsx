import "./Settings.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { changeTime } from "../Timer/timerSlice";
import Input from "./Input";
import { hideSettings } from "./settingsSlice";
import CloseImg from "../../assets/close.svg";

const SettingsModal = ({ pomodoro, long, short }) => {
  const [formPomodoro, setFormPomodoro] = useState(pomodoro);
  const [formLong, setFormLong] = useState(long);
  const [formShort, setFormShort] = useState(short);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      changeTime({
        pomodoro: Number(formPomodoro),
        longBreak: Number(formLong),
        shortBreak: Number(formShort),
      })
    );
    dispatch(hideSettings());
  };
  return (
    <div className="overlay" onClick={() => dispatch(hideSettings())}>
      <form
        onSubmit={submitHandler}
        onClick={(e) => e.stopPropagation()}
        className="settings-form"
      >
        <div className="flex w-[100%] justify-end">
          <button className="" onClick={() => dispatch(hideSettings())}>
            <img src={CloseImg} alt="close" className="h-5" />
          </button>
        </div>

        <div className=" flex flex-row m-2 justify-between">
          <Input
            label={"Pomodoro"}
            name={"pomodoro"}
            value={formPomodoro}
            setValue={setFormPomodoro}
          />
          <Input
            label={"Long"}
            name={"long"}
            value={formLong}
            setValue={setFormLong}
          />
          <Input
            label={"Short"}
            name={"short"}
            value={formShort}
            setValue={setFormShort}
          />
        </div>
        <button
          className="bg-indigo-800 text-white font-medium p-1 rounded-sm m-2"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};

SettingsModal.propTypes = {
  pomodoro: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
  short: PropTypes.number.isRequired,
};
export default SettingsModal;
