# express-4.x-github-passport-example
Demonstrating Express.js and Passport.js OAuth login with GitHub

Uses Express.js generator with Hogan.js view engine
```bash
$ express --view=hjs myapp
```
Found here: https://expressjs.com/en/starter/generator.html

# To SETUP:
Install dependences:
```bash
npm Install
```
Edit:
config_passport_github.js and .gitignore it

# To Run:
On Linux and MacOS:
```bash
$ DEBUG=express-4.x-github-passport-example:* npm start
```

On Windows:
```bash
> set DEBUG=express-4.x-github-passport-example:* & npm start
```

Visit http://localhost:3000/ to view the app.



Based on:
https://github.com/passport/express-4.x-facebook-example
and
https://github.com/jaredhanson/passport-github

Be sure to follow this guide for Production:
https://expressjs.com/en/advanced/best-practice-security.html
