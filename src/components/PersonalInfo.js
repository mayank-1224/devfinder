import "./styles/PersonalInfo.css";

const PersonalInfo = (props) => {
  //console.log(props);
  const url = props.newdata.userAvatar;
  let bio = props.newdata.userBio;
  if (bio === null) bio = "This profile has no bio";
  const date = new Date(props.newdata.userJoined);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateinfo = `Joined ${date.getDate() - 1}
  ${months[date.getMonth()]}
  ${date.getFullYear()}`;
  const link = `https://github.com/${props.newdata.userLogin}`;

  return (
    <div className="personalInfo">
      <img src={url} alt="UserImage" className="userImage" />
      <div className="Names">
        <h2 className="userName">{props.newdata.userName}</h2>
        <a href={link} target="_blank" rel="noreferrer" className="userLogin">
          @{props.newdata.userLogin}
        </a>
        <p className="userBio">{bio}</p>
      </div>
      <p className="userDate">{dateinfo}</p>
    </div>
  );
};

export default PersonalInfo;
