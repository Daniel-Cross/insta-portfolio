import "./styles/App.css";
import Header from "./components/Header";
import PhoneFrame from "./components/PhoneFrame";
import ReactGA from "react-ga";

function App() {
  const TRACKING_ID = "G-85G1DWNL2G"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  return (
    <div className="App">
      <Header />
      <PhoneFrame />
    </div>
  );
}

export default App;
