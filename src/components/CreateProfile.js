import SearchForm from "./SearchForm";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
import { MakeUserProfile } from "./MakeDatabase";
//import PersonalInfo from "./PersonalInfo";

const CreateProfile = () => {
  const [profile, setProfile] = useState();

  const receiveData = (rdata) => {
    setProfile(MakeUserProfile(rdata));
  };

  console.log(profile);

  return (
    <>
      <SearchForm receiveData={receiveData} />
      <ProfileCard data={profile} />
    </>
  );
};

export default CreateProfile;
