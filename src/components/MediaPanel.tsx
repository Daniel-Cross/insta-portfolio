import "../styles/MediaPanel.css";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { updateSidePanel } from "../constants/sidePanelDataSlice";
import { Tweet } from "react-twitter-widgets";

const MediaPanel = () => {
  const dispatch = useDispatch();

  const handleOnClickClose = () => {
    dispatch(
      updateSidePanel({
        sidePanelData: { showMediaPanel: false },
      })
    );
  };

  return (
    <div className="Media-panel">
      <div className="side-panel-header">
        <div
          className="close-icon"
          style={{ position: "absolute", top: 20, right: 5 }}
          onClick={() => handleOnClickClose()}
        >
          <IoClose color="white" size={25} />
        </div>
        <div style={{ marginTop: 60, width: "100%" }}>
          <Tweet tweetId="1107951232688242688" />
        </div>
      </div>
    </div>
  );
};

export default MediaPanel;
