import React, { useEffect, useState } from "react";
import { fetchUserData } from "../fetchApi/fetchUserData";
import { fetchPullRequests } from "../fetchApi/fecthPullRequest";
import { fetchOrganisation } from "../fetchApi/fetchOrgs";
import { fetchCommits } from "../fetchApi/fetchCommits";
import { fetchRepos } from "../fetchApi/fetchRepo.js";
import { fetchIssues } from "../fetchApi/fetchIssue.js";

import UserCard from "./userCard";
import GithubCard from "../githubCard/githubcard";
import LanguagesPage from "./lang";
import OrganizationContributionsPage from "./orgContri";

const UserDataTransfer = ({ userName }) => {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [user, setUser] = useState({
    avatar_url: "",

    bio: "",
    blog: "",

    commits: "",
    commits_count: "",
    company: "",
    created_at: "",

    data: "",
    email: "",
    followers: "",
    html_url: "",
    location: "",

    name: "",
    nonForkedRepos: "",
    orgs: "",
    public_gists: "",
    public_repos: "",
    pullRequests: "",
    pullRequests_count: "",

    repos: "",
    repos_count_total: "",
    repos_count_nonforked: "",
    stars: "",
    twitter_username: "",
  });

  useEffect(() => {
    // Fetching User Data
    const fetchUserwrapper = async () => {
      setLoading(true);
      try {
        const response = await fetchUserData(userName);
        if (response === null) {
          setError("User not found");
        } else {
          setUser((prevUser) => ({
            ...prevUser,
            data: response,
            avatar_url: response.avatar_url,
            name: response.name,
            email: response.email,
            twitter_username: response.twitter_username,
            company: response.company,
            created_at: response.created_at,
            bio: response.bio,
            blog: response.blog,
            location: response.location,
            html_url: response.html_url,
            public_gists: response.public_gists,
            public_repos: response.public_repos,
            followers: response.followers,
          }));
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    // Fetching Pull Request Data
    const fetchPullRequestWrapper = async () => {
      setLoading(true);
      try {
        const response = await fetchPullRequests(userName);
        if (response === null) {
          setError("No Pull Requests");
        } else {
          setUser((prevUser) => ({
            ...prevUser,
            pullRequests: response,
            pullRequests_count: response.total_count,
          }));
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    // Fetching Commit Data
    const fetchCommitWrapper = async () => {
      setLoading(true);
      try {
        const response = await fetchCommits(userName);
        if (response === null) {
          setError("No Commits");
        } else {
          setUser((prevUser) => ({
            ...prevUser,
            commits: response,
            commits_count: response.total_count,
          }));
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    // Fetching Repo Data
    const fetchRepoWrapper = async () => {
      setLoading(true);

      let perPage = 100;
      let page = 1;
      let repos = [];
      const header = {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      };

      try {
        while (true) {
          const response = await fetch(
            `https://api.github.com/users/${userName}/repos?per_page=1000&page=1`,
            { headers: header }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch repositories");
          }
          const data = await response.json();
          if (data.length === 0) {
            break;
          }
          repos = repos.concat(data);
          page++;
        }
        if (repos === null) {
          setError("No Repos");
        } else {
          setUser((prevUser) => ({
            ...prevUser,
            repos: repos,
            repos_count_total: repos.length,
            repos_count_nonforked: repos.filter((repo) => !repo.fork).length,
            nonForkedRepos: repos.filter((repo) => !repo.fork),
            stars: repos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
          }));
        }
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    // Fetching Issue Data
    const fetchIssueWrapper = async () => {
      setLoading(true);
      try {
        const response = await fetchIssues(userName);
        if (response === null) {
          setError("No Issues");
        } else {
          setUser((prevUser) => ({
            issues: response,
          }));
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    // Fetching Org Data
    const fetchOrgWrapper = async () => {
      setLoading(true);
      try {
        const response = await fetchOrganisation(userName);
        if (response === null) {
          setError("No Orgs");
        } else {
          setUser((prevUser) => ({
            orgs: response,
          }));
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    Promise.all([
      fetchUserwrapper(),
      fetchPullRequestWrapper(),
      fetchCommitWrapper(),
      fetchRepoWrapper(),
      fetchIssueWrapper(),
      fetchOrgWrapper(),
    ]).then(() => {
      // console.log(user);
    })
    .catch((err) => {
      setError(err.message);
    });
  }, [userName]);

  // console.log(user);
  // console.log(err);

  return (
    <>
      <>
        {user && <UserCard user={user} />}
        <span className="grade text-4xl">GitHub Stats</span>
        <div className="githubstats">
          {user && <GithubCard userName={user} />}
        </div>
        {userName && <LanguagesPage userName={userName} />}
        {userName && <OrganizationContributionsPage userName={userName} />}
      </>
    </>
  );
};

export default UserDataTransfer;
