import "./styles/OtherInfo.css";
import location from "./styles/aaalocation.svg";
import twitter from "./styles/aaatwitter.svg";
import office from "./styles/aaaoffice.svg";
import blog from "./styles/aaablog.svg";

const OtherInfo = (profile) => {
  let location_var = profile.newdata.userLocation;
  let twitter_var = profile.newdata.userTwitter;
  let blog_var = profile.newdata.userBlog;
  let office_var = profile.newdata.userCompany;

  if (location_var === null) {
    location_var = "Not Available";
  }
  if (twitter_var === null) {
    twitter_var = "Not Available";
  }
  if (!blog_var) {
    blog_var = "Not Available";
  }
  if (office_var === null) {
    office_var = "Not Available";
  }

  return (
    <div className="otherInfo">
      <div className="sec1">
        <div className="lol">
          <img className="Img" src={location} alt="location"></img>
          {location_var}
        </div>

        <div className="lol">
          <img className="Img" src={blog} alt="blog"></img>
          {blog_var}
        </div>
      </div>

      <div className="sec2">
        <div className="lol">
          <img className="Img" src={twitter} alt="twitter"></img>
          {twitter_var}
        </div>

        <div className="lol">
          <img className="Img" src={office} alt="office"></img>
          {office_var}
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
