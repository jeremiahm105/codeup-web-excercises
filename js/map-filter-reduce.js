
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let languageArray = users.filter(user => user.languages.length >= 3)
console.log(languageArray);


// Use .map to create an array of strings where each element is a user's email address

let userEmail = users.map(user => user.email)
console.log(userEmail);


// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalYearsExperience = users.reduce(function(acc, user) {
    return acc + user.yearsOfExperience}, 0);
console.log(`All user experience: ${totalYearsExperience}`);

let average = totalYearsExperience/users.length
console.log(`All user average years :${average}`)


// Use .reduce to get the longest email from the list of users.

let userLongestEmail = users.reduce((longest, {email}) => {
        if (email.length > longest.length) {
            return email;
        } else {
            return longest;
        }
    }, "");

console.log(userLongestEmail);

// or

// let userLongestEmail = users.reduce(function (accum,user) {
//     return  accum + Math.max(user.email)}, 0);
// }
//
// console.log(userLongestEmail);



// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let userNames = users.reduce(function (accum,user) {
//     return accum + user.name.join()
// }, " ")


// Bonus
// Use .reduce to get the unique list of languages from the list of users.