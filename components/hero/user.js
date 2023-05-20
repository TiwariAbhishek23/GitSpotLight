import React from 'react'
import {fetchUserData} from '../fetchApi/fetchUserData'
import {fetchPullRequests} from '../fetchApi/fecthPullRequest.js'
import {fetchCommits} from '../fetchApi/fetchCommits'
import {fetchRepos} from '../fetchApi/fetchRepo.js'
import {fetchIssues} from '../fetchApi/fetchIssue.js'


// User object
const user = {


    avatar_url : "",

    name : "",
    email : "",
    twitter_username : "",
    company : "",
    created_at : "",
    bio : "",
    blog : "",
    location : "",
    html_url : "",

    public_gists : "",
    public_repos : "",
    followers : "",
    pullRequests : "",
    commits : "",
    stars : "",
    issues : "",


}
// get username from input form
const username = "abhishektiwari23"
console.log(username + " username1")
// Fetching user data
const fetchUserDataWrapper = async (username) => {
    const response = await fetchUserData(username)
    if(response === null){
        return null
    }

    const data = await response.json()
    console.log(data)

    // Updating user object
    user.avatar_url = data.avatar_url

    user.name = data.name
    user.email = data.email
    user.twitter_username = data.twitter_username
    user.company = data.company
    user.created_at = data.created_at
    user.bio = data.bio
    user.blog = data.blog
    user.location = data.location
    user.html_url = data.html_url

    user.public_gists = data.public_gists
    user.public_repos = data.public_repos
    user.followers = data.followers

}

// Pull requests
const fetchPullRequestsWrapper = async (username) => {
    try{
    const response = await fetchPullRequests(username)
    if(response === null){
        return null
    }

    const data = await response.json()
    console.log(data)

    user.pullRequests = data.total_count
    }
    catch(error){
        console.log(error)
        return error
}
}

// Commits
const fetchCommitsWrapper = async (username) => {
    try{
    const response = await fetchCommits(username)
    if(response === null){
        return null
    }
    const data = await response.json()
    console.log(data)
    user.commits = data.total_count
    }
    catch(error){
        console.log(error)
        return error
    }
}

// repos and stars
const fetchReposWrapper = async (username) => {
    try{
    const response = await fetchRepos(username)
    if(response === null){
        return null
    }
    const data = await response.json()
    console.log(data)
    user.stars = data.stargazers_count
    }
    catch(error){
        console.log(error)
        return error
    }
}

// Issues
const fetchIssuesWrapper = async (username) => {
    try{
    const response = await fetchIssues(username)
    if(response === null){
        return null
    }
    const data = await response.json()
    console.log(data)
    user.issues = data.total_count
    }
    catch(error){
        console.log(error)
        return error
    }
}
export default user;






