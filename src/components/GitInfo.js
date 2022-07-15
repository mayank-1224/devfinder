import "./styles/GitInfo.css";
const GitInfo = (profile) => {
  return (
    <div className="gitInfo">
      <p className="repos">
        Repos <p className="text">{profile.newdata.data.userRepos}</p>
      </p>
      <p className="repos">
        Followers <p className="text">{profile.newdata.data.userFollowers}</p>
      </p>
      <p className="repos">
        Following <p className="text">{profile.newdata.data.userFollowing}</p>
      </p>
    </div>
  );
};

export default GitInfo;
