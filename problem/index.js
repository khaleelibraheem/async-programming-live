const fetch = require("node-fetch");

async function getUserInfo(username) {
  let url = `https://api.github.com/users/${username}`;
  let result = await fetch(url);
  if(!result.ok) {
    throw new Error(`Failed to fetch user info for ${username}`)
  }
  return result.json();
}

async function getFollowings(username) {
  let url = `https://api.github.com/users/${username}/following`;
  let result = await fetch(url);
  if(!result.ok) {
    throw new Error(`Failed to fetch followings for ${username}`)
  }
  return result.json();
}

async function getRepos(username) {
  let url = `https://api.github.com/uss/${username}/repos`;
  let result = await fetch(url);
  if(!result.ok) {
    throw new Error(`Failed to fetch repos for ${username}`)
  }
  return result.json();
}

async function getFollowedRepositories(username) {
    try {
        let user = await getUserInfo(username);
        console.log(`The user ${username} is following ${user.following} users`);
      
        let followings = await getFollowings(username);
      
        let usernames = followings.map((user) => user.login);
        console.log("Usernames:", usernames);
      
        let repoList = await Promise.all(
          usernames.map((username) => {
            return getRepos(username);
          })
        );
        console.log("RepoList", repoList.length);
        let flattenedRepos = repoList.flat();
        let repoNames = flattenedRepos.map((repo) => repo.full_name);
        console.log("Total number of repos:", repoNames.length);
        console.log("Sample repos", repoNames.slice(0, 10));      
    } catch (error) {
        console.error("Something bad happened", error)
    }
  // getUserInfo("khaleelibraheem")
  //     .then((user) => {
  //         console.log(`The user ${username} is following ${user.following} users`)
  //         return getFollowing(username)
  //     }).then((followings) => {
  //         console.log("Following:", followings)
  //         return followings.map(user => user.login)
  //     }).then((usernames) => {
  //         console.log("Usernames:", usernames)
  //         return Promise.all(usernames.map(username => {
  //             return getRepos(username)
  //         })).then(repos => {
  //             let flattenedRepos = repos.flat()
  //             let repoNames = flattenedRepos.map(repo => repo.full_name)
  //             console.log("Total number of repos:", repoNames.length)
  //             console.log("Sample repos", repoNames)
  //         })
  //     })
}

getFollowedRepositories("khaleelibraheem");
