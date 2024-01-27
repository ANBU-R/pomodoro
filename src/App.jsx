import "./App.css";
import TimeBox from "./features/Timer/TimeBox";
import Nav from "./nav";

function App() {
  return (
    <div className="h-screen">
      <Nav />
      <main className="w-full flex flex-col justify-center items-center  bg-indigo-400 h-[90vh]">
        <TimeBox />
      </main>
    </div>
  );
}

export default App;
