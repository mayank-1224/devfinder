import SearchForm from "./SearchForm";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
import axios from "axios";
import { MakeUserProfile } from "./MakeDatabase";
//import PersonalInfo from "./PersonalInfo";

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
