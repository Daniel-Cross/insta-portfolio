import JobIcon from "../atoms/JobIcon";
import UserIcon from "../atoms/UserIcon";
import { JobData } from "../constants/jobData";
import "../styles/Stories.css";

const Stories = () => {
  return (
    <div className="Stories">
      <UserIcon />
      {JobData.map((job) => (
        <JobIcon image={job.storyImage} name={job.name} />
      ))}
    </div>
  );
};

export default Stories;
