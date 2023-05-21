import React, { useState, useEffect } from "react";
import Github from "../../assets/githubshine.svg";
import Image from "next/image";


const OpenCard = ({ user }) => {
  console.log(user + " github card"); // checked - working
  return (
    <>
      <div className="card   mx-auto lg:p-9 ">
        <div className="stats mx-auto my-4 px-1 py-9 bg-white dark:bg-goldenyellow text-black rounded-4xl border border-solid border-black">
          <div className="stats-wrap inline-block ">
            <ul>
              <li className="lg:m-4 m-2 text-justify">
                ⭐ Total Stars :{" "}
                <div className="count inline ml-1.5"> {user.stars}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🔄 Total Commits :{" "}
                <div className="count inline ml-1">{user.commits}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🔄 Total Repos :{" "}
                <div className="count inline ml-1">{user.repos}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🛠️ Total Pull Request :{" "}
                <div className="count inline ml-1">{user.pullRequests}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🚫 Total Contributions :{" "}
                <div className="count inline ml-1">{user.issues}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🎒 Flollowers :{" "}
                <div className="count inline ml-1">{user.followers}</div>
              </li>
            </ul>
          </div>
          <div className="git-ani inline float-right m-1 -mt-8">
            <Image
              src={Github}
              alt="github stats"
              className="bg-black  grade rounded-4xl hidden lg:inline"
            />
          </div>
        </div>
      </div>
      <div className="orgs-title  lg:p-8 ">
        {" "}
        <span className="grade text-4xl">Organisations</span>
        <div className="orgs">
          {user.orgs ? (
            user.orgs.map((org) => (
              <div
                className="org-wrap inline-block align-center text-center mx-auto my-4 w-3/12"
                key={org.id}
              >
                <img className="boxes" src={org.avatar_url} alt={org.login} />
              </div>
            ))
          ) : (
            <div className="l">Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};
export default OpenCard;
