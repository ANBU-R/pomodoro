import { useSelector } from "react-redux";
import "./App.css";
import SettingsModal from "./features/Settings/SettingsModal";
import TimeBox from "./features/Timer/TimeBox";
import Nav from "./Nav";

function App() {
  const { pomodoro, shortBreak, longBreak, tickingSoundType, alarmSoundType } =
    useSelector((store) => store.timer);
  const { settingsVisibility } = useSelector((store) => store.settings);
  return (
    <div className="h-screen">
      <Nav />
      <main className="w-full flex flex-col justify-center items-center  bg-indigo-400 h-[90vh]">
        <TimeBox />
        {settingsVisibility && (
          <SettingsModal
            pomodoro={pomodoro}
            short={shortBreak}
            long={longBreak}
            tickingSoundType={tickingSoundType}
            alarmSoundType={alarmSoundType}
          />
        )}
      </main>
    </div>
  );
}

export default App;
