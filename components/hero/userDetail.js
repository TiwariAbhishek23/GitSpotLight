import React, { useEffect, useState } from "react";
import { fetchUserData } from "../fetchApi/fetchUserData";
import { fetchPullRequests } from "../fetchApi/fecthPullRequest";
import { fetchOrgs } from "../fetchApi/fetchOrgs";
import { fetchCommits } from "../fetchApi/fetchCommits";
import { fetchRepos } from "../fetchApi/fetchRepo.js";
import { fetchIssues } from "../fetchApi/fetchIssue.js";
import UserCard from "./userCard";
import GithubCard from "../githubCard/githubcard";

const UserDataTransfer = ({ userName }) => {
  console.log(userName + " data"); // checked - working
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [pullRequests, setPullRequests] = useState(null);
  const [commits, setCommits] = useState(null);
  const [repos, setRepos] = useState(null);
  const [issues, setIssues] = useState(null);
  const [stars, setStars] = useState(null);
  const [orgs, setOrgs] = useState(null);

  const [user, setUser] = useState({
    avatar_url: "",

    bio: "",
    blog: "",

    commits: "", //
    company: "",
    created_at: "",

    data: "",
    email: "",
    followers: "",
    html_url: "",
    issues: "",
    location: "",

    name: "",
    orgs: "",//
    public_gists: "",
    public_repos: "",
    pullRequests: "",

    repos: "",
    stars: "", //
    twitter_username: "",


  });

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetchUserData(userName);
        console.log(response + " response yaha  userdetail se");
        if (response === null) {
          setUserData(null);
          setError("User not found");
        }
        setUserData(response);
        console.log(response);
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
        console.log(user);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    const fetchPullRequest = async () => {
      setLoading(true);
      try {
        const response = await fetchPullRequests(userName);
        console.log(response + " response yaha ");
        if (response === null) {
          setPullRequests(null);
          setError("No Pull Requests");
        }
        setPullRequests(response);
        console.log(response);
        if (pullRequests !== null) {
          user.pullRequests = pullRequests;
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    const fetchCommit = async () => {
      setLoading(true);
      try {
        const response = await fetchCommits(userName);
        console.log(response + " response yaha ");
        if (response === null) {
          setCommits(null);
          setError("No Commits");
        }
        setCommits(response);
        console.log(response);
        if (commits !== null) {
          user.commits = commits;
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    const fetchRepo = async () => {
      setLoading(true);
      try {
        const response = await fetchRepos(userName);
        console.log(response + " response yaha ");
        if (response === null) {
          setRepos(null);
          setError("No Repos");
        }
        setRepos(response);
        console.log(response);
        if (repos) {
          user.repos = repos;
        }
        let totalStars = 0;
        response.forEach((repos) => {
          totalStars += repos.strangazers_count;
        });
        if (!totalStars) {
          setStars("Not Sufficient Data");
        } else {
          setStars(totalStars);
          user.stars = stars;
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    const fetchIssue = async () => {
      setLoading(true);
      try {
        const response = await fetchIssues(userName);
        console.log(response + " response yaha");
        if (response === null) {
          setIssues(null);
          setError("No Issues");
        }
        setIssues(response);
        console.log(response);
        if (issues !== null) {
          user.issues = issues;
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    const fetchOrg = async () => {
      setLoading(true);
      try {
        const response = await fetchOrgs(userName);
        console.log(response + " response yaha ");
        if (response === null) {
          setOrgs(null);
          setError("No Stars");
        }
        setOrgs(response);
        console.log(response);
        if (orgs !== null) {
          user.orgs = orgs;
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchUser();
    fetchPullRequest();
    fetchCommit();
    fetchRepo();
    fetchIssue();
    fetchOrg();
  }, []);

  console.log("in user data ");
  console.log(user);
  let total_stars = 0;
  if (user.repos) {
    user.repos.forEach((repos) => {
      total_stars += repos.strangazers_count;
    });
  }
  user.stars = total_stars;
  console.log(user.stars);


  return (
    <>
      <UserCard user={user} />
      <span className="grade text-4xl">GitHub Stats</span>
      <div className="githubstats">
      {/* <GithubCard userName={user} /> */}
      </div>
    </>
  );
};

export default UserDataTransfer;
