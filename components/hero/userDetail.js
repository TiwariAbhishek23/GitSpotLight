import React, { useEffect, useState } from "react";
import { fetchUserData } from "../fetchApi/fetchUserData";
import { fetchPullRequests } from "../fetchApi/fecthPullRequest";
import { fetchOrganisation } from "../fetchApi/fetchOrgs";
import { fetchCommits } from "../fetchApi/fetchCommits";
import { fetchRepos } from "../fetchApi/fetchRepo.js";
import { fetchIssues } from "../fetchApi/fetchIssue.js";
import UserCard from "./userCard";
import GithubCard from "../githubCard/githubcard";


const UserDataTransfer = ({ userName }) => {
  // console.log(userName + " data"); // checked - working
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [pullRequests, setPullRequests] = useState(null);
  const [commits, setCommits] = useState(null);
  const [repos, setRepos] = useState(null);
  const [issues, setIssues] = useState(null);
  const [orgs, setOrgs] = useState(null);

  const [user, setUser] = useState({
    avatar_url: "",

    bio: "",
    blog: "",

    commits: "", //
    commits_count: "",
    company: "",
    created_at: "",

    data: "",
    email: "",
    followers: "",
    html_url: "",
    issues: "",
    issues_count: 0,
    location: "",

    name: "",
    nonForkedRepos: "",
    orgs: "",//
    public_gists: "",
    public_repos: "",
    pullRequests: "",
    pullRequests_count: "",

    repos: "",
    repos_count_total: "",
    repos_count_nonforked: "",
    stars: "", //
    twitter_username: "",


  });

  useEffect(() => {

    // Fetching User Data
    const fetchUserwrapper = async () => {
      setLoading(true);
      try {
        const response = await fetchUserData(userName);
        // console.log(response + " response yaha  userdetail se");
        if (response === null) {
          setUserData(null);
          setError("User not found");
        }
        setUserData(response);
        // console.log(response);
        if (userData !== null) {
          user.data = userData;
          user.avatar_url = userData.avatar_url;
          user.name = userData.name;
          user.email = userData.email;
          user.twitter_username = userData.twitter_username
            ? userData.twitter_username
            : "Not Available";
          user.company = userData.company;
          user.created_at = userData.created_at;
          user.bio = userData.bio;
          user.blog = userData.blog;
          user.location = userData.location;
          user.html_url = userData.html_url;
          user.public_gists = userData.public_gists;
          user.public_repos = userData.public_repos;
          user.followers = userData.followers;
        }
        // console.log(user);
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
        // console.log(response + " response yaha ");
        if (response === null) {
          setPullRequests(null);
          setError("No Pull Requests");
        }
        setPullRequests(response);
        // console.log(response);
        if (pullRequests !== null) {
          user.pullRequests = pullRequests;
          user.pullRequests_count = pullRequests.total_count;
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
        // console.log(response + " response yaha ");
        if (response === null) {
          setCommits(null);
          setError("No Commits");
        }
        setCommits(response);
        // console.log(response);
        user.commits_count = commits.total_count;
        // console.log("commits count");
        // console.log(user.commits_count);
        // console.log(response);
        user.commits = commits;
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    // Fetching Repo Data
    const fetchRepoWrapper = async () => {
      setLoading(true);
      try {
        const response = await fetchRepos(userName);
        if (response === null) {
          setRepos(null);
          setError("No Repos");
        }
        setRepos(response);
        user.repos = repos;
        user.repos_count_total = repos.length;

        const nonForkedRepos = repos.filter((repo) => !repo.fork);
        user.repos_count_nonforked = nonForkedRepos.length;
        user.nonForkedRepos = nonForkedRepos;

        const totalStars = nonForkedRepos.reduce((accumulator, repo) => accumulator + repo.stargazers_count, 0);
        user.stars = totalStars;

      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    // Fetching Issue Data
    const fetchIssueWrapper = async () => {
      setLoading(true);
      try {
        const response = await fetchIssues(userName);
        console.log(response + " response yaha issue se");
        if (response === null) {
          setIssues(null);
          setError("No Issues");
        }
        setIssues(response);
        console.log(response);
        user.issues = issues;
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
        // console.log(response + " response yaha org");
        if (response === null) {
          setOrgs(null);
          setError("No Orgs");
        }
        setOrgs(response);

        // console.log(response);
        user.orgs = orgs;
        // console.log(user.orgs);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchUserwrapper();
    fetchPullRequestWrapper();
    fetchCommitWrapper();
    fetchRepoWrapper();
    fetchIssueWrapper();
    fetchOrgWrapper();
  }, []);

  console.log("in user data");
  console.log(user);


  return (
    <>
      <UserCard user={user} />
      <span className="grade text-4xl">GitHub Stats</span>
      <div className="githubstats">
      <GithubCard userName={user} />
      </div>
    </>
  );
};

export default UserDataTransfer;
