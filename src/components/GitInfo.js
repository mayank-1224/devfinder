import "./styles/GitInfo.css";
const GitInfo = (profile) => {
  return (
    <div className="gitInfo">
      <p className="repos">
        Repos <p className="text">{profile.newdata.userRepos}</p>
      </p>
      <p className="repos">
        Followers <p className="text">{profile.newdata.userFollowers}</p>
      </p>
      <p className="repos">
        Following <p className="text">{profile.newdata.userFollowing}</p>
      </p>
    </div>
  );
};

export default GitInfo;
