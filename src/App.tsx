import "./styles.css";
// import CountDown from "./CountDown";
import CountDownA from "./CountDownA";

export default function App() {
  return (
    <div className="App">
      <h2>Count Down</h2>
      {/* <CountDown mss={60} /> */}
      <CountDownA mss={60} />
    </div>
  );
}
