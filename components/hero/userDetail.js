import React from 'react'
import GithubCard from "../githubCard/githubcard";
import { useState } from "react";
import Profile from "../../assets/github.svg";

const UserData = ({user}) => {
  const [pic, setPic] = useState(Profile);
    const [name, setName] = useState(user.name);
    const [Email, setEmail] = useState(user.email);
    const [twitterUserName, setTwitterUserName] = useState(user.
        twitter_username);
    const [company, setCompany] = useState(user.company);
    const [startDate, setStartDate] = useState(user.created_at);

    return (
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
                  {Email && <div className="mail"> 📬 Email : {Email}</div>}
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

    )
}
export default UserData;