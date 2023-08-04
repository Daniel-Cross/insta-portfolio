import { useState, useEffect } from "react";
import { MdOutlineWifi } from "react-icons/md";
import { BsBatteryFull } from "react-icons/bs";
import "../styles/Header.css";

const Header = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="Header">
      <h4 className="date">{date.toLocaleDateString()}</h4>
      <h4 className="time">
        {date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h4>

      <div className="icons">
        <MdOutlineWifi size={22} color="white" />
        <span className="battery">
          <h4 className="percentage">100%</h4>
          <BsBatteryFull size={22} color="white" />
        </span>
      </div>
    </div>
  );
};

export default Header;
