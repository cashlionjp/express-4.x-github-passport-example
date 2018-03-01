// Replace YOUR_CLIENT_ID and YOUR_CLIENT_SECRET with the values provided by GitHub here:
// https://github.com/settings/developers

// NOTE: you can use localhost for your URL and Callback

// DO NOT POST TO GITHUB
// ADD THIS FILE TO YOUR .gitignore

module.exports = {
    clientID: YOUR_CLIENT_ID,
    clientSecret: YOUR_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/login/github/return'
};
