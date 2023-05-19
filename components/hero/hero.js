import React, { useEffect, useState } from "react";

import HeroEffect from "./heroEffect";
import InputForm from "./inputForm";
import UserProfileData from "./userDetail";
/*



*/

const Hero = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState("");
  const [err, setError] = useState("");
  const [status, setStatus] = useState("Generate Stats");

  const [pic, setPic] = useState("");
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [email, setEmail] = useState("");
  const [twitterUserName, setTwitterUserName] = useState("");
  const [blog, setBlog] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async (event) => {
    setLoading(true);
    setStatus("Extracting Data...");
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) {
        setUser("");
      }
      const data = await response.json();
      console.log("data " + data);
      setUserData(data);
      setPic(data.avatar_url);
      setName(data.name);
      setEmail(data.email);
      setBlog(data.blog);
      setTwitterUserName(data.twitter_username);
      setStartDate(data.created_at);
      setCompany(data.company);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  if (loading) {
    return <div className="loading">Still Loadiing...</div>;
  }
  if (err) {
    return (
      <>
        <InputForm user={user} handleSubmit = {handleSubmit}/>
        <div className="error">🥲 Got Error : {err}</div>
      </>
    );
  }
  if (userData.message === "Not Found") {
    return (
      <div className="w-1/2 mx-auto my-24 bg-gray rounded-4xl p-8">
       <InputForm user={user} handleSubmit = {handleSubmit}/>
        <div className="error text-center text-4xl">🥲 UserName not found</div>
      </div>
    );
  }
  {
    return (
      <div className="w-1/2 mx-auto my-8  p-8">
        {!userData && (
          <HeroEffect/>
        )}
        <div className="homeContent m-4 p-4">
          <InputForm user={user} handleSubmit = {handleSubmit}/>
          {userData && (
            <UserProfileData/>
          )}
        </div>
      </div>
    );
  }
};
export default Hero;
export { pic, name, startDate, email, twitterUserName, blog, company};
