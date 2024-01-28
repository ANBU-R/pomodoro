import { useDispatch } from "react-redux";
import whiteLogo from "./assets/logo-white.svg";
import settingsLogo from "./assets/settings.svg";
import { showSettings } from "./features/Settings/settingsSlice";
const Nav = () => {
  const dispatch = useDispatch();

  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={whiteLogo} className="h-[50%]" alt="pomoFoc-logo" />
        <h1 className="text-white font-bold font-mono">PomoFoc</h1>
      </div>
      <button className="nav-button" onClick={() => dispatch(showSettings())}>
        <img src={settingsLogo} className="h-[100%]" alt="settings" />
      </button>
    </nav>
  );
};
export default Nav;
