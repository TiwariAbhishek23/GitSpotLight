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
import LangPieChart from "../Charts/langPieChart";


const UserDataTransfer = ({ userName }) => {
  console.log(userName + " data"); // checked - working
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);
  // const [userData, setUserData] = useState(null);
  // const [pullRequests, setPullRequests] = useState(null);
  // const [commits, setCommits] = useState(null);
  // const [repos, setRepos] = useState(null);
  // const [issues, setIssues] = useState(null);
  // const [orgs, setOrgs] = useState(null);

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
        // console.log(response );
        if (response === null) {
          // setUserData(null);
          setError("User not found");
        }
        else{
        // setUserData(response);
        // console.log(response);

        setUser(prevUser => ({
          ...prevUser,
          data: response,
          avatar_url: response.avatar_url,
          name: response.name,
          email: response.email,
          twitter_username: response.twitter_username
            ? response.twitter_username
            : "Not Available",
          company: response.company,
          created_at: response.created_at,
          bio: response.bio,
          blog: response.blog,
          location: response.location,
          html_url: response.html_url,
          public_gists: response.public_gists,
          public_repos: response.public_repos,
          followers: response.followers
        }));
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
        // console.log(response );
        if (response === null) {
          // setPullRequests(null);
          setError("No Pull Requests");
        }
        else{
        // setPullRequests(response);
        setUser(prevUser => ({
          ...prevUser,
          pullRequests: response,
          pullRequests_count: response.total_count
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
        // console.log(response + " response yaha ");
        if (response === null) {
          // setCommits(null);
          setError("No Commits");
        }
        else{

        // setCommits(response);
        setUser(prevUser => ({
          ...prevUser,
          commits: response,
          commits_count: response.total_count
        }));
        }
      }
        // console.log(response);
        // console.log("commits count");
        // console.log(user.commits_count);
        // console.log(response);
        catch (err) {
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
          // setRepos(null);
          setError("No Repos");
        }
        else{
        // setRepos(response);
        const nonForkedRepos = response.filter((repo) => !response.fork);
        const totalStars = nonForkedRepos.reduce((accumulator, repo) => accumulator + repo.stargazers_count, 0);

setUser(prevUser => ({
          ...prevUser,
          repos: response,
          repos_count_total: response.length,
          repos_count_nonforked : nonForkedRepos.length,
          nonForkedRepos : nonForkedRepos,
          stars : totalStars,
        }));
      }
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
        // console.log(response + " response yaha issue se");
        if (response === null) {
          // setIssues(null);
          setError("No Issues");
        }
        else{
        // setIssues(response);
        // console.log(response);
        setUser(prevUser => ({
        issues : response,
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
        // console.log(response + " response yaha org");
        if (response === null) {
          // setOrgs(null);
          setError("No Orgs");
        }
        else{
        // setOrgs(response);

        // console.log(response);
        setUser(prevUser => ({
        orgs : response,
        }));
      }
        // console.log(user.orgs);
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
    // fetchIssueWrapper(),
    fetchOrgWrapper(),
    ]).then(() => {
      // console.log("in promise");
      // console.log(user);

    });
  }, [userName
    ])

  // console.log("in user data");
  // console.log(user);


  return (
    <>

  <>
    {user && <UserCard user={user} />}
    <span className="grade text-4xl">GitHub Stats</span>
    <div className="githubstats">
      {user && <GithubCard userName={user} />}
    </div>
    <LangPieChart/>
    {userName && <LanguagesPage userName={userName}/>}
  </>


    </>
  );
};

export default UserDataTransfer;
