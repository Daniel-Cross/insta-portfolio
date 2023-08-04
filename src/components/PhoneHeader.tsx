import { BsSend } from "react-icons/bs";
import "../styles/PhoneHeader.css";

const PhoneHeader = () => {
  const handleClickEmail = () => {
    const email = "hello@danielcross.dev";
    const subject = "Hi Daniel! I saw your portfolio and wanted to say hi!";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, "_blank");
  };
  return (
    <div className="header">
      <h3 className="name">Insta-dan</h3>
      <div className="phone-icons">
        <div className="icon-container" onClick={() => handleClickEmail()}>
          <BsSend color="white" />
        </div>
      </div>
    </div>
  );
};

export default PhoneHeader;
