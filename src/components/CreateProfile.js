import SearchForm from "./SearchForm";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
import axios from "axios";
import { MakeUserProfile } from "./MakeDatabase";
//import PersonalInfo from "./PersonalInfo";

const DUMMY = {
  userAvatar: "https://avatars.githubusercontent.com/u/583231?v=4",
  userLogin: "octocat",
  userName: "The Octocat",
  userBio: null,
  userRepos: 8,
  userFollowers: 6369,
  userFollowing: 0,
  userLocation: "San Francisco",
  userTwitter: null,
  userCompany: "@github",
  userBlog: "https://github.blog",
  userJoined: "2011-01-25T18:44:36Z",
};

const CreateProfile = () => {
  const [profile, setProfile] = useState({});

  const receiveData = (data) => {
    axios
      .get(`https://api.github.com/users/${data}`)
      .then((res) => {
        setProfile(MakeUserProfile(res));
      })
      .catch((err) => {
        console.log(err);
        alert("API ERROR haii. APP SAHI HAI");
      });
  };

  //console.log(profile);

  return (
    <>
      <SearchForm receiveData={receiveData} />
      {profile.size > 1 && <ProfileCard data={profile} />}
    </>
  );
};

export default CreateProfile;
