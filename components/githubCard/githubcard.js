import React, { useState, useEffect } from "react";
import Github from "../../assets/githubshine.svg";
import Image from "next/image";

const OpenCard = ({ user }) => {
  const [followers, setFollowers] = useState(null);
  const [repos, setRepos] = useState(null);
  const [pullRequests, setPullRequests] = useState(null);
  const [commits, setCommits] = useState(null);
  const [stars, setStars] = useState(null);
  const [issues, setIssues] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orgs, setorgs] = useState(null);

  useEffect(() => {
    // organisations
    const fetchOrgs = async () => {
      setLoading(true);
      try {
        const header = {
          Authentication: "Bearer ${process.env.Github_Auth_Token}",
        };
        const response = await fetch(
          `https://api.github.com/users/${user}/orgs`,
          { header }
        );
        const data = await response.json();
        setorgs(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    // followers count
    const fetchFollowers = async () => {
      setLoading(true);
      try {
        const header = {
          Authentication: "Bearer ${process.env.Github_Auth_Token}",
        };
        const response = await fetch(`https://api.github.com/users/${user}`, {
          header,
        });
        const data = await response.json();
        //  console.log(data);
        setFollowers(data.followers);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    // Repo
    const fetchRepos = async () => {
      try {
        const header = {
          Authentication: "Bearer ${process.env.Github_Auth_Token}",
        };

        const response = await fetch(
          `https://api.github.com/users/${user}/repos`,
          { header }
        );
        const data = await response.json();
        setRepos(data.length);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    // Stars
    const fetchStars = async () => {
      try {
        const header = {
          Authentication: "Bearer ${process.env.Github_Auth_Token}",
        };

        const response = await fetch(
          `https://api.github.com/users/${user}/repos`,
          { header }
        );

        const data = await response.json();
        let totalStars = 0;
        data.forEach((repo) => {
          totalStars += repo.strangazers_count;
        });
        if (!totalStars) {
          setStars("Not Sufficient Data");
        } else {
          setStars(totalStars);
        }
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    // Issues
    const fetchIssues = async () => {
      try {
        const header = {
          Authentication: "Bearer ${process.env.Github_Auth_Token}",
        };

        const response = await fetch(
          `https://api.github.com/search/issues?q=author:${user}`,
          { header }
        );

        const data = await response.json();
        setIssues(data.total_count);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    // cOMMITS
    const fetchCommits = async () => {
      setLoading(true);
      try {
        const header = {
          Authentication: "Bearer ${process.env.Github_Auth_Token}",
        };

        const response = await fetch(
          `https://api.github.com/search/commits?q=author:${user}`,
          { header }
        );
        const data = await response.json();
        setCommits(data.total_count);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    //PR
    const fetchPR = async () => {
      setLoading(true);
      try {
        const header = {
          Authentication: "Bearer ${process.env.Github_Auth_Token}",
        };

        const response = await fetch(
          `https://api.github.com/search/issues?q=type:pr+author:${user}`,
          { header }
        );
        const data = await response.json();
        setPullRequests(data.total_count);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchFollowers();
    fetchRepos();
    fetchPR();
    fetchCommits();
    fetchStars();
    fetchIssues();
    fetchOrgs();
  }, []);
  if (loading) {
    return <div className="loading">Still Loadiing</div>;
  }
  if (error) {
    <div className="error">Got error</div>;
  }
  return (
    <>
      <div className="card   mx-auto lg:p-9 ">
        <div className="stats mx-auto my-4 px-1 py-9 bg-white dark:bg-goldenyellow text-black rounded-4xl border border-solid border-black">
          <div className="stats-wrap inline-block ">
            <ul>
              <li className="lg:m-4 m-2 text-justify">
                ⭐ Total Stars :{" "}
                <div className="count inline ml-1.5"> {stars}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🔄 Total Commits :{" "}
                <div className="count inline ml-1">{commits}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🔄 Total Repos :{" "}
                <div className="count inline ml-1">{repos}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🛠️ Total Pull Request :{" "}
                <div className="count inline ml-1">{pullRequests}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🚫 Total Contributions :{" "}
                <div className="count inline ml-1">{issues}</div>
              </li>
              <li className="lg:m-4 m-2 text-justify">
                🎒 Flollowers :{" "}
                <div className="count inline ml-1">{followers}</div>
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
          {orgs ? (
            orgs.map((org) => (
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
