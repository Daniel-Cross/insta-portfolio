import { useDispatch } from "react-redux";
import { Projects, Technologies } from "../constants/jobData";
import "../styles/Profile.css";
import { updateSidePanel } from "../constants/sidePanelDataSlice";
import { BsClipboardHeart, BsFillGrid3X3GapFill } from "react-icons/bs";
import { useState } from "react";

const Profile = () => {
  const [profileTabIndex, setProfileTabIndex] = useState(1);
  const dispatch = useDispatch();

  const handleOnClick = (tech: string, type: number) => {
    if (tech !== "King Kev Quote Generator") {
      dispatch(
        updateSidePanel({
          sidePanelData: {
            showSidePanel: true,
            name: tech,
            sidePanelType: type,
          },
        })
      );
    }

    if (type === 3 && tech === "King Kev Quote Generator") {
      dispatch(
        updateSidePanel({
          sidePanelData: {
            showSidePanel: true,
            name: tech,
            sidePanelType: type,
            showMediaPanel: true,
          },
        })
      );
    }
  };

  return (
    <div className="Profile">
      <div className="user-information">
        <div className="profile-icon-name-container">
          <img
            className="profile-screen-icon"
            src={require("../assets/daniel.jpg")}
            alt="user icon"
          />
          <p
            style={{
              fontWeight: 700,
              marginTop: 10,
              whiteSpace: "nowrap",
            }}
          >
            Daniel Cross
          </p>
          <p style={{ margin: 0, whiteSpace: "nowrap" }}>Software Engineer</p>
        </div>
        <div className="profile-screen-stats">
          <div className="profile-screen-stat">
            <p style={{ fontWeight: 700, textAlign: "left" }}>5 years</p>
            <p style={{ marginRight: 40 }}>Experience</p>
          </div>
          <div className="profile-screen-stat">
            <p style={{ fontWeight: 700 }}>UK</p>
            <p>From</p>
          </div>
          <div className="profile-screen-stat">
            <p style={{ fontWeight: 700 }}>Sweden</p>
            <p>Location</p>
          </div>
        </div>
      </div>
      <hr style={{ margin: 0 }} />
      <div className="profile-buttons-container">
        <div className="profile-button" onClick={() => setProfileTabIndex(1)}>
          <BsFillGrid3X3GapFill
            color={profileTabIndex === 1 ? "white" : "rgba(255, 255, 255, 0.3)"}
            size={25}
          />
          <p style={{ textAlign: "center", margin: "auto", marginBottom: 10 }}>
            Languages
          </p>
        </div>
        <div className="profile-button" onClick={() => setProfileTabIndex(2)}>
          <BsClipboardHeart
            color={profileTabIndex === 2 ? "white" : "rgba(255, 255, 255, 0.3)"}
            size={25}
          />
          <p style={{ textAlign: "center", margin: "auto", marginBottom: 10 }}>
            Projects
          </p>
        </div>
      </div>

      <div
        style={{
          width: "50%",
          backgroundColor: "white",
          height: 3,
          alignSelf: profileTabIndex === 1 ? "flex-start" : "flex-end",
        }}
      />

      {profileTabIndex === 1 && (
        <div className="languages-container">
          {Technologies.map((tech) => (
            <div
              style={tech.styles}
              onClick={() => handleOnClick(tech.name, 1)}
            >
              {tech.logo}
              {tech.icon}
            </div>
          ))}
        </div>
      )}

      {profileTabIndex === 2 && (
        <div className="languages-container">
          {Projects.map((project: any) => (
            <div
              style={project.styles}
              onClick={() => handleOnClick(project.name, 3)}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt="project"
                  className="project-image"
                />
              )}
              {!project.image && project.logo && project.logo}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
