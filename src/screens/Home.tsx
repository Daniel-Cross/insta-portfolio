import PhoneHeader from "../components/PhoneHeader";
import Post from "../components/Post";
import Stories from "../components/Stories";
import { Posts } from "../constants/jobData";

const Home = () => {
  return (
    <>
      <PhoneHeader />
      <Stories />
      {Posts.map((post) => (
        <>
          <hr />
          <Post
            key={post.id}
            userImage={post.userImage}
            postImage={post.post}
            user={post.user}
            description={post.description}
            technologies={post.technologies}
          />
        </>
      ))}
    </>
  );
};

export default Home;
