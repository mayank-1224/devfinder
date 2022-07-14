import "./styles/GitInfo.css";
const GitInfo = (profile) => {
  return (
    <div className="gitInfo">
      <p className="repos">
        Repos: <p className="text">{profile.newdata.data.userRepos}</p>
      </p>
      <p className="followers">
        Followers: <p className="text">{profile.newdata.data.userFollowers}</p>
      </p>
      <p className="following">
        Following: <p className="text">{profile.newdata.data.userFollowing}</p>
      </p>
    </div>
  );
};

export default GitInfo;
