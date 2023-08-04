import { useDispatch, useSelector } from "react-redux";
import "../styles/SidePanel.css";
import { IoClose } from "react-icons/io5";
import { updateSidePanel } from "../constants/sidePanelDataSlice";
import { JobData, Projects, Technologies } from "../constants/jobData";
import { RootState } from "../constants/store";
import { BsChat, BsFillHeartFill, BsSend } from "react-icons/bs";

const SidePanel = () => {
  const { sidePanelData } = useSelector((state: RootState) => state.sidePanel);
  const dispatch = useDispatch();

  const handleOnClickClose = () => {
    dispatch(
      updateSidePanel({
        sidePanelData: { showSidePanel: false, sidePanelType: 0 },
      })
    );
  };

  const TechnologyDetail = () => {
    const technology = Technologies.find(
      (tech) => tech.name === sidePanelData.name
    );

    return (
      <div className="side-panel-content">
        {technology && (
          <>
            <div
              style={{
                ...technology.styles,
                width: "100%",
                height: 350,
              }}
            >
              {technology.icon}
            </div>
            <div className="post-icons">
              <BsFillHeartFill color="#FF4033" size={20} />
              <BsChat color="white" size={20} />
              <BsSend color="white" size={20} />
            </div>
            <div className="post-user-comment">
              <p style={{ fontWeight: 700, marginLeft: 15 }}>Daniel</p>
              <p
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {technology.name + " " + technology.experience} commercial
                experience
              </p>
            </div>
          </>
        )}
      </div>
    );
  };

  const JobDetail = () => {
    const job = JobData.find((job) => job.name === sidePanelData.name);

    return (
      <div className="side-panel-content">
        {job && (
          <>
            <div
              style={{
                ...job.styles,
                width: "100%",
                height: 350,
              }}
            >
              {job.icon}
            </div>
            <div className="post-icons">
              <BsFillHeartFill color="#FF4033" size={20} />
              <BsChat color="white" size={20} />
              <BsSend color="white" size={20} />
            </div>
            <div className="post-user-comment">
              <p style={{ fontWeight: 700, marginLeft: 15 }}>Daniel</p>
              <p
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {job.name + " " + job.experience} commercial experience
              </p>
            </div>
          </>
        )}
      </div>
    );
  };

  const ProjectDetail = () => {
    const project: any = Projects.find(
      (project) => project.name === sidePanelData.name
    );

    return (
      <div className="side-panel-content">
        {project && (
          <>
            {project.image && (
              <img
                src={project.image}
                alt="project"
                style={{
                  ...project.styles,
                  width: "100%",
                  height: 350,
                }}
              />
            )}

            {!project.image && (
              <div
                style={{
                  ...project.styles,
                  width: "100%",
                  height: 350,
                }}
              >
                {project.logo}
              </div>
            )}

            <div className="post-icons">
              <BsFillHeartFill color="#FF4033" size={20} />
              <BsChat color="white" size={20} />
              <BsSend color="white" size={20} />
            </div>
            <div className="post-user-comment">
              <p style={{ fontWeight: 700, marginLeft: 15 }}>Daniel</p>
              <p
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  width: "100%",
                  textAlign: "left",
                  marginBottom: 30,
                }}
              >
                {project.description}
              </p>
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                #{project.name}
              </a>
            )}
            <div className="hashtags">
              {project.technologies.length > 0 &&
                project.technologies.map((tech) => (
                  <p
                    style={{
                      fontWeight: 700,
                      padding: 0,
                      marginRight: 10,
                      width: 100,
                    }}
                  >
                    #{tech}
                  </p>
                ))}
            </div>
          </>
        )}

        {project.posts &&
          project.posts.map((post) => (
            <>
              <div className="post-user-comment">
                {post.image && (
                  <img src={post.image} alt="post" style={post.styles} />
                )}

                {!post.image && (
                  <div style={post.styles}>
                    <h1 style={{ color: "white" }}>{post.logo}</h1>
                  </div>
                )}
              </div>
              <div className="post-icons">
                <BsFillHeartFill color="#FF4033" size={20} />
                <BsChat color="white" size={20} />
                <BsSend color="white" size={20} />
              </div>
              <div className="post-user-comment">
                <p style={{ fontWeight: 700, marginLeft: 15 }}>Daniel</p>
                <p
                  style={{
                    marginBottom: 30,
                    marginLeft: 10,
                    marginRight: 10,
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  {post.description}
                </p>
              </div>
            </>
          ))}
      </div>
    );
  };

  const ShowData = () => {
    switch (sidePanelData.sidePanelType) {
      case 1:
        return TechnologyDetail();
      case 2:
        return JobDetail();
      case 3:
        return ProjectDetail();
      default:
        return <></>;
    }
  };

  return (
    <div className="SidePanel">
      <div className="side-panel-header">
        <div className="side-panel-header-image-container">
          <img
            src={require("../assets/daniel.jpg")}
            alt="user icon"
            className="post-user-image"
          />
          <p style={{ marginLeft: "10px", fontWeight: 700 }}>Daniel</p>
        </div>
        <div className="close-icon" onClick={() => handleOnClickClose()}>
          <IoClose color="white" size={25} />
        </div>
      </div>

      {ShowData()}
    </div>
  );
};

export default SidePanel;
