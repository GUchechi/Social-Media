import ProfileImage from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

import "./PostShare.css";

const PostShare = () => {
  return (
    <div className="postShare">
      <img src={ProfileImage} alt="Profile img" />
      <div>
        <input type="text" placeholder="What is happening" />
      </div>
      <div className="postOptions">
        <div className="option">
          <UilScenery />
        </div>
        <div className="option">
          <UilPlayCircle />
        </div>
        <div className="option">
          <UilLocationPoint />
        </div>
        <div className="option">
          <UilSchedule />
        </div>
      </div>
    </div>
  );
};

export default PostShare;
