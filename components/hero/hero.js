import React, {useState } from "react";

import HeroEffect from "./heroEffect";
import InputForm from "./inputForm";
import UserProfileData from "./userDetail";
import { fetchUserData } from "../fetchApi/fetchUserData";


const Hero = () => {

  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetchUserData(user);
      if(response === null){
        setUser("");
        setError("User not found");
      }
      setUserData(response);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
console.log(user + " hero")
  if (loading) {
    return <div className="loading">Still Loadiing...</div>;
  }
  if (err) {
    return (
      <div className="w-1/2 mx-auto my-24 bg-gray rounded-4xl p-8">
        <InputForm user={user} setUser={setUser} handleSubmit={handleSubmit} />

        <div className="error">🥲 Got Error : {err}</div>
      </div>
    );
  }
  if (userData === null) {
    return (
      <div className="w-1/2 mx-auto my-24 bg-gray rounded-4xl p-8">
       <InputForm user={user} setUser={setUser} handleSubmit={handleSubmit} />

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
          <InputForm user={user} setUser={setUser} handleSubmit={handleSubmit} />
          {userData && (

            <UserProfileData userName={user}/>
          )}
        </div>
      </div>
    );
  }
};
export default Hero;

