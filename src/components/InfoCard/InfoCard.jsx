import { UilPen } from "@iconscout/react-unicons";
import "./InfoCard.css";

const InfoCard = () => {
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <UilPen />
      </div>

      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span>In a RelationShip</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in</b>
        </span>
        <span>France</span>
      </div>

      <div className="info">
        <span>
          <b> Works at</b>
        </span>
        <span>MicroSoft</span>
      </div>
      <button className="button">Logout</button>
    </div>
  );
};

export default InfoCard;
