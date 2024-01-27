import whiteLogo from "./assets/logo-white.svg";
import settingsLogo from "./assets/settings.svg";
const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={whiteLogo} className="h-[50%]" alt="pomoFoc-logo" />
        <h1 className="text-white font-bold font-mono">PomoFoc</h1>
      </div>
      <button className="nav-button">
        <img src={settingsLogo} className="h-[100%]" alt="settings" />
      </button>
    </nav>
  );
};
export default Nav;
