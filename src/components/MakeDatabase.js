//helper function that filters all the relevant data and wraps them in an object

export const MakeUserProfile = (res) => {
  const userObject = {
    userAvatar: res.data.avatar_url,
    userLogin: res.data.login,
    userName: res.data.name,
    userBio: res.data.bio,
    userRepos: res.data.public_repos,
    userFollowers: res.data.followers,
    userFollowing: res.data.following,
    userLocation: res.data.location,
    userTwitter: res.data.twitter_username,
    userCompany: res.data.company,
    userBlog: res.data.blog,
    userJoined: res.data.created_at,
  };
  return userObject;
};
