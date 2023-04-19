const fetch = require("node-fetch");


function getUserInfo(username) {
    let url = `https://api.github.com/users/${username}`;
    return fetch(url)
        .then((resp) => resp.json())
}

function getFollowing(username) {
    let url = `https://api.github.com/users/${username}/following`;
    return fetch(url)
        .then((resp) => resp.json())
}

function getRepos(username) {
    let url = `https://api.github.com/users/${username}/repos`;
    return fetch(url)
        .then((resp) => resp.json())
}

function getFollowedRepositories(username) {
    getUserInfo("khaleelibraheem")
        .then((user) => {
            console.log(`The user ${username} is following ${user.following} users`)
            return getFollowing(username)
        }).then((followings) => {
            console.log("Following:", followings)
            return followings.map(user => user.login)
        }).then((usernames) => {
            console.log("Usernames:", usernames)
            return Promise.all(usernames.map(username => {
                return getRepos(username)
            })).then(repos => {
                let flattenedRepos = repos.flat()
                let repoNames = flattenedRepos.map(repo => repo.full_name)
                console.log("Total number of repos:", repoNames.length)
                console.log("Sample repos", repoNames)
            })
        })
} 

getFollowedRepositories('khaleelibraheem')

