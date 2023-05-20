import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../fetchApi/fetchUserData';
import { fetchPullRequests } from '../fetchApi/fecthPullRequest.js'
import { fetchCommits } from '../fetchApi/fetchCommits';
import { fetchRepos } from '../fetchApi/fetchRepo.js';
import { fetchIssues } from '../fetchApi/fetchIssue.js';
import UserCard from './userCard';

const UserData = ({ userName }) => {
  console.log(userName + ' deta');
  const [user, setUser] = useState({
    avatar_url: '',
    name: '',
    email: '',
    twitter_username: '',
    company: '',
    created_at: '',
    bio: '',
    blog: '',
    location: '',
    html_url: '',
    public_gists: '',
    public_repos: '',
    followers: '',
    pullRequests: '',
    commits: '',
    stars: '',
    issues: '',
  });

  useEffect(() => {
    const fetchUserDataWrapper = async (userName) => {
      try {
        const response = await fetchUserData(userName);
        if (response === null) {
          return null;
        }
        const data = await response.json();
        console.log(data + " dataNew");
        setUser((prevUser) => ({
          ...prevUser,
          avatar_url: data.avatar_url,
          name: data.name,
          email: data.email,
          twitter_username: data.twitter_username,
          company: data.company,
          created_at: data.created_at,
          bio: data.bio,
          blog: data.blog,
          location: data.location,
          html_url: data.html_url,
          public_gists: data.public_gists,
          public_repos: data.public_repos,
          followers: data.followers,
        }));
      } catch (error) {
        console.log(error);
        return error;
      }
    };

    const fetchPullRequestsWrapper = async (username) => {
      try {
        const response = await fetchPullRequests(username);
        if (response === null) {
          return null;
        }

        const data = await response.json();
        setUser((prevUser) => ({
          ...prevUser,
          pullRequests: data.total_count,
        }));
      } catch (error) {
        console.log(error);
        return error;
      }
    };

    const fetchCommitsWrapper = async (username) => {
      try {
        const response = await fetchCommits(username);
        if (response === null) {
          return null;
        }
        const data = await response.json();
        setUser((prevUser) => ({
          ...prevUser,
          commits: data.total_count,
        }));
      } catch (error) {
        console.log(error);
        return error;
      }
    };

    const fetchReposWrapper = async (username) => {
      try {
        const response = await fetchRepos(username);
        if (response === null) {
          return null;
        }
        const data = await response.json();
        setUser((prevUser) => ({
          ...prevUser,
          stars: data.stargazers_count,
        }));
      } catch (error) {
        console.log(error);
        return error;
      }
    };

    const fetchIssuesWrapper = async (username) => {
      try {
        const response = await fetchIssues(username);
        if (response === null) {
          return null;
        }
        const data = await response.json();
        setUser((prevUser) => ({
          ...prevUser,
          issues: data.total_count,
        }));
      } catch (error) {
        console.log(error);
        return error;
      }
    };

    fetchUserDataWrapper(userName);
    fetchPullRequestsWrapper(userName);
    fetchCommitsWrapper(userName);
    fetchReposWrapper(userName);
    fetchIssuesWrapper(userName);
  }, [userName]);

  console.log(user + ' userdataafter');

  return <UserCard user={user} />;
};

export default UserData;
