import { AiFillHome } from "react-icons/ai";
import "../styles/NavigationPanel.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../constants/store";

interface NavigationPanelProps {
  setActiveScreen: (screen: number) => void;
}

const NavigationPanel = ({ setActiveScreen }: NavigationPanelProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const { sidePanelData } = useSelector((state: RootState) => state.sidePanel);

  const handleOnClick = (index: number) => {
    setActiveIndex(index);
    setActiveScreen(index);
  };

  return (
    <div
      className="navigation-panel"
      style={{ left: sidePanelData.showMediaPanel ? "10%" : "32%" }}
    >
      <span
        className={activeIndex === 1 ? "active-link" : "link"}
        onClick={() => handleOnClick(1)}
      >
        <AiFillHome size={28} color="white" />
      </span>

      <span
        className={activeIndex === 2 ? "active-link" : "link"}
        onClick={() => handleOnClick(2)}
      >
        <img
          src={require("../assets/daniel.jpg")}
          style={{ height: 40, width: 40, borderRadius: "50%" }}
          alt="user icon"
        />
      </span>
    </div>
  );
};

export default NavigationPanel;
