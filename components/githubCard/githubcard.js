import React, { useState, useEffect } from "react";
import Github from "../../assets/githubshine.svg";
import Image from "next/image";
import Link from "next/link";


const OpenCard = ({ userName }) => {

  if (!userName.stars || !userName.commits_count || !userName.repos_count_total || !userName.repos_count_nonforked || !userName.pullRequests_count || !userName.followers || !userName.orgs) {
    return <div>Loading...</div>; // Display a loading state until all data is available
  }

  return (
    <>
      <div className="card   mx-auto lg:p-9 ">
        <div className="stats mx-auto my-4 px-1 py-9 bg-white dark:bg-goldenyellow text-black rounded-4xl border border-solid border-black">
          <div className="stats-wrap inline-block ">
            <ul>
              <li className="lg:m-4 m-2 text-justify">
                ⭐ Total Stars :{" "}
                <div className="count inline ml-1.5"> {userName.stars}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🔄 Total Commits :{" "}
                <div className="count inline ml-1">{userName.commits_count}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🔄 Total Repos :{" "}
                <div className="count inline ml-1">{userName.public_repos}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🔄 Non Forked Repos :{" "}
                <div className="count inline ml-1">{userName.repos_count_nonforked}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🛠️ Total Pull Request :{" "}
                <div className="count inline ml-1">{userName.pullRequests_count}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🚫 Total Contributions :{" "}
                <div className="count inline ml-1">{userName.issues_count}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🎒 Flollowers :{" "}
                <div className="count inline ml-1">{userName.followers}</div>
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

{/* Organisations Section */}
      <div className="orgs-title  lg:p-8 ">
        {" "}
        <span className="grade text-4xl">Organisations</span>
        <div className="orgs">
          {userName.orgs ? (
            userName.orgs.map((org) => (
              <div
                className="org-wrap inline-block align-center text-center rounded-3xl m-8 border-2 border-solid p-4 w-1/4"
                key={org.id}
              >
              <Link href={`https://github.com/${org.login}`} target="_blank">
          <Image className="boxes rounded-full" src={org.avatar_url} alt={org.login} />
          <span className="org-label  break-all ">{org.login}</span>
      </Link>
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
