import React, { useState } from "react";

import HeroEffect from "./heroEffect";
import InputForm from "./inputForm";
import UserProfileData from "./userDetail";
import { fetchUserData } from "../fetchApi/fetchUserData";



const Hero = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      // Fetch user data
      const response = await fetchUserData(user);

      if (response === null) {
        setUser("");
        setError("User not found");
      } else {
        setUserData(response);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };


  let content;

  if (loading) {
    content = <div className="loading">Still Loading...</div>;
  } else if (err) {
    content = (
      <div className="error">🥲 Got Error: {err}</div>
    );
  } else if (userData.message === "Not Found") {
    content = (
      <div className="error text-center text-4xl">🥲 UserName not found</div>
    );
  } else {
    content = (
      <div>
        {!userData && <HeroEffect />}
        <UserProfileData userName={user} />
      </div>
    );
  }

  return (
    <div className="w-1/2 mx-auto my-8 p-8">
      <InputForm user={user} setUser={setUser} handleSubmit={handleSubmit} />
      {content}
    </div>
  );
};

export default Hero;
