
"use strict";

fetch('https://api.github.com/users', {headers: {
        'Authorization': ''
    }
})
    .then(response => response.json())
    .then(resp => console.log(resp))

function getGithubUsernames() {
    return fetch('https://api.github.com/users')
        .then(response => response.json())
}

getGithubUsernames().then( users => {
    users.forEach( userObj => {
        // do something with each username
        console.log(userObj.login);
    });
}).catch(error => console.error(error));

function getLastCommitDate(username) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/users/${username}/events`)
            .then(response => response.json())
            .then(data => {
                const lastCommit = data.find(event => event.type === "PushEvent");
                if (!lastCommit) {
                    reject(new Error("User has no commit history"));
                }
                const lastCommitDate = new Date(lastCommit.created_at);
                resolve(lastCommitDate.toDateString());
            })
            .catch(error => reject(error));
    });
}

console.log(getLastCommitDate(''));