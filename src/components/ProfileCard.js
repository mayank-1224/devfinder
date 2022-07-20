import PersonalInfo from "./PersonalInfo";
import GitInfo from "./GitInfo";
import OtherInfo from "./OtherInfo";
import "./styles/ProfileCard.css";

const ProfileCard = (props) => {
  console.log(props.data);
  return (
    <>
      {props.data && (
        <div className="profileCard">
          <PersonalInfo newdata={props.data} />
          <GitInfo newdata={props.data} />
          <OtherInfo newdata={props.data} />
        </div>
      )}
    </>
  );
};

export default ProfileCard;
