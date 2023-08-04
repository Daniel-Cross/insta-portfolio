import "../styles/JobIcon.css";

interface JobIconProps {
  image: any;
  name: string;
}

const JobIcon = ({ image, name }: JobIconProps) => {
  return (
    <div className="Job">
      <div className="job-icon">
        <img src={image} alt="job icon" className="job-icon-image" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default JobIcon;
