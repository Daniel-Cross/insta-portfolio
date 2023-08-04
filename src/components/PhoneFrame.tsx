import { useState } from "react";
import "../styles/PhoneFrame.css";
import NavigationPanel from "./NavigationPanel";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import SidePanel from "./SidePanel";
import { useSelector } from "react-redux";
import { RootState } from "../constants/store";
import MediaPanel from "./MediaPanel";

const PhoneFrame = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  const { sidePanelData } = useSelector((state: RootState) => state.sidePanel);

  return (
    <div className="PhoneFrame">
      <NavigationPanel setActiveScreen={setActiveScreen} />
      <div className="phone-blur">
        {activeScreen === 1 ? <Home /> : <Profile />}
      </div>
      {sidePanelData.showSidePanel && <SidePanel />}
      {sidePanelData.showMediaPanel && <MediaPanel />}
    </div>
  );
};

export default PhoneFrame;
