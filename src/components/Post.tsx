import "../styles/Post.css";
import { BsThreeDots } from "react-icons/bs";
import { BsSend, BsChat, BsFillHeartFill } from "react-icons/bs";

const Post = ({ userImage, postImage, user, description, technologies }) => {
  return (
    <div className="Post">
      <div className="post-header">
        <img src={userImage} alt="user icon" className="post-user-image" />
        <p style={{ marginLeft: "10px", fontWeight: 700 }}>{user}</p>
        <BsThreeDots
          color="white"
          style={{ position: "relative", left: 220 }}
        />
      </div>
      <div className="post-image-container">
        <img src={postImage} alt="post" className="post-image" />
      </div>
      <div className="post-icons">
        <BsFillHeartFill color="#FF4033" size={20} />
        <BsChat color="white" size={20} />
        <BsSend color="white" size={20} />
      </div>
      <div className="post-user-comment">
        <p style={{ fontWeight: 700, marginLeft: 15 }}>{user}</p>
        <p
          style={{
            marginLeft: 10,
            marginRight: 10,
            width: "100%",
            textAlign: "left",
          }}
        >
          {description}
        </p>
      </div>
      <div className="hashtags">
        {technologies.length > 0 &&
          technologies.map((tech) => (
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
    </div>
  );
};

export default Post;
