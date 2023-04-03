import PostSide from "../../components/PostSide/PostSide";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <div className="RightSide">Right Side</div>
    </div>
  );
};

export default Home;
