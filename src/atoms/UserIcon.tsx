import "../styles/UserIcon.css";
import { BsPlusLg } from "react-icons/bs";

interface UserIconProps {
  removePlus?: boolean;
}

const UserIcon = ({ removePlus }: UserIconProps) => {
  return (
    <div className="User">
      <div className="user-icon-container">
        <img
          src={require("../assets/daniel.jpg")}
          alt="user icon"
          className="icon-image"
        />
        {removePlus ? null : (
          <div className="icon-background">
            <BsPlusLg color="white" />
          </div>
        )}
      </div>
      {removePlus ? null : <p style={{ marginLeft: "10px" }}>Daniel</p>}
    </div>
  );
};

export default UserIcon;
