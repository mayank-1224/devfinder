import PersonalInfo from "./PersonalInfo";
import GitInfo from "./GitInfo";
import OtherInfo from "./OtherInfo";
import './styles/ProfileCard.css'

const ProfileCard = (profile) => {
  console.log(profile);
  return (
    <div className="profileCard">
      <PersonalInfo newdata={profile} />
      <GitInfo newdata={profile}/>
      <OtherInfo newdata={profile}/>
    </div>
  );
};

export default ProfileCard;
