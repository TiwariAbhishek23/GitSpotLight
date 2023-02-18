import React, { useEffect, useState } from "react";
import Link from "next/link.js";
import Type from "./typewrite.js";
import GithubCard from "../githubCard/githubcard";
import Profile from "../../assets/github.svg";
const Hero = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState("");
  const [err, setError] = useState("");
  const [status, setStatus] = useState("Generate Stats");

  const [pic, setPic] = useState(Profile);
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
  console.log(user);
  console.log(userData);

  if (loading) {
    return <div className="loading">Still Loadiing...</div>;
  }
  if (err) {
    return (
      <>
        <div className="form w-1/2 my-32 mx-auto ">
          <form>
            <div className="flex flex-col space-y-4">
              <label htmlFor="" className="text-center">
                {" "}
                Enter Github username
              </label>
              <input
                type="text"
                id="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="GitHub userName"
                className="border-2 border-gray-300 rounded-lg p-2"
              />
              <button
                type="submit"
                className="rounded-lg bg-myblue w-1/2 mx-auto py-2 px-4 hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Generate Stats
              </button>
            </div>
          </form>
        </div>

        <div className="error">🥲 Got Error : {err}</div>
      </>
    );
  }
  if (userData.message === "Not Found") {
    return (
      <div className="w-1/2 mx-auto my-24 bg-gray rounded-4xl p-8">
        <div className="form w-1/2 my-24 mx-auto ">
          <form>
            <div className="flex flex-col space-y-4">
              <label htmlFor="" className="text-center">
                {" "}
                Enter Github username
              </label>
              <input
                type="text"
                id="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="GitHub userName"
                className="border-2 border-gray-300 rounded-lg p-2"
              />
              <button
                type="submit"
                className="rounded-lg bg-myblue w-1/2 mx-auto py-2 px-4 hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Generate Stats
              </button>
            </div>
          </form>
        </div>

        <div className="error text-center text-4xl">🥲 UserName not found</div>
      </div>
    );
  }
  {
    return (
      <div className="w-1/2 mx-auto my-8  p-8">
        {!userData && (
          <div className="container ">
            {/* <div className="heading text-4xl text-center ">Hi <span className='wave '>👋</span> <span className="gra">User</span></div> */}
            <div className="subheading text-center text-4xl m-4 p-4">
              Welcode <span className="wave ">👋</span> to{" "}
              <span className="grade">GitSpotLight</span>
            </div>
            <div className="text-center text-4xl ">
              {" "}
              <div className="inline ">
                <Type />
              </div>{" "}
            </div>
          </div>
        )}
        <div className="homeContent m-4 p-4">
          <div className="form  my-32 mx-auto bg-gray rounded-4xl m-32 p-8">
            <form>
              <div className="flex flex-col space-y-4">
                <label htmlFor="" className="text-center">
                  {" "}
                  Enter Github username
                </label>
                <input
                  type="text"
                  id="username"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  placeholder="GitHub userName"
                  className="border-2 border-gray-300 rounded-lg p-2"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-myblue w-1/2 mx-auto py-2 px-4 hover:bg-blue-600"
                  onClick={handleSubmit}
                >
                  Generate Stats
                </button>
              </div>
            </form>
          </div>
          {userData && (
            <div className="stats ">
              <div className="user">
                <div className="pic ">
                  <img
                    src={pic}
                    alt="User Profile Avatar"
                    height="200"
                    width="200"
                    className="rounded-4xl mx-auto -rotate-6"
                  />
                  <span className="grade text-4xl">User Data</span>
                </div>
                <div className="userdata my-8 text-justify font-thin bg-goldenyellow text-black p-4 rounded-4xl">
                  {name && (
                    <div className="name">
                      👨‍💻 Name : <div className="name-tab  inline">{name}</div>
                    </div>
                  )}
                  {email && <div className="mail"> 📬 Email : {email}</div>}
                  {/* { blog && <div className="blog">🔗 Blog Link : <Link  hreaf='/' target= "_blank" >Link</Link></div>} */}
                  {twitterUserName && (
                    <div className="twitter">
                      🐤 Twitter User Name : {twitterUserName}
                    </div>
                  )}
                  {company && (
                    <div className="company">💼 Company : {company}</div>
                  )}
                  {startDate && (
                    <div className="date">🗓️ Joining Date : {startDate}</div>
                  )}
                </div>
              </div>
              <span className="grade text-4xl">GitHub Stats</span>
              <div className="githubstats">
                <GithubCard user={user} />
              </div>
            </div>
          )}
        </div>
        <style jsx>
          {`
            .wave {
              animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
              animation-duration: 2.5s; /* Change to speed up or slow down */
              animation-iteration-count: infinite; /* Never stop waving :) */
              transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
              display: inline-block;
            }

            @keyframes wave-animation {
              0% {
                transform: rotate(0deg);
              }
              10% {
                transform: rotate(14deg);
              } /* The following five values can be played with to make the waving more or less extreme */
              20% {
                transform: rotate(-8deg);
              }
              30% {
                transform: rotate(14deg);
              }
              40% {
                transform: rotate(-4deg);
              }
              50% {
                transform: rotate(10deg);
              }
              60% {
                transform: rotate(0deg);
              } /* Reset for the last half to pause */
              100% {
                transform: rotate(0deg);
              }
            }
            .grade {
              font-weight: bold;

              background: linear-gradient(-90deg, #ee0979, #ff6a00, #fcfc8f);
              -webkit-background-clip: text;
              background-size: 200%;
              -webkit-text-fill-color: transparent;
              animation: grading 8s ease infinite;
            }
            @keyframes grading {
              from {
                -webkit-filter: hue-rotate(0);
                -moz-filter: hue-rotate(0);
                -ms-filter: hue-rotate(0);
                filter: hue-rotate(0);
              }
              to {
                -webkit-filter: hue-rotate(360deg);
                -moz-filter: hue-rotate(360deg);
                -ms-filter: hue-rotate(360deg);
                filter: hue-rotate(360deg);
              }
            }
          `}
        </style>
      </div>
    );
  }
};
export default Hero;
