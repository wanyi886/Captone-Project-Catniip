const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const AppleStrategy = require('passport-apple');
const { User } = require('./db/models');
const bcrypt = require('bcryptjs');


require('https').globalAgent.options.rejectUnauthorized = false;

const GOOGLE_CLIENT_ID = "829802030424-upbkdn5td9mjas9c6eco1ss33p7lru6d.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "a1d3dd3c78b99ea48f7c";
const GITHUB_CLIENT_SECRET = "b2a81fb859deb1576b1ff19474a2e53163339c7b"

let googleCallback = "/api/session/google/callback";
let githubCallback = "/api/session/github/callback";

if (process.env.NODE_ENV === 'production') {
    googleCallback = "https://catniip-26d640bb2067.herokuapp.com/api/session/google/callback"
    githubCallback = "https://catniip-26d640bb2067.herokuapp.com/api/session/github/callback"
}

const googleUserPwd = "googleUserPwd2023"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: googleCallback,
  },

// example codes from website below, because we won't have any db, so we will use "done" instead of "cb"
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }

    // function(accessToken, refreshToken, profile, done) { // profile means user information
    //     done(null, profile)
    // }

    async (accessToken, refreshToken, profile, done) => {

        try {
            
            const user = await User.findOne({ where: { email: profile.emails[0].value }})

            if (user) {
                return done(null, user);
            } else {

                const newUser = await User.create({
                    oauthId: profile.id,
                    username: profile.displayName,
                    email: profile.emails[0].value,
                    hashedPassword: bcrypt.hashSync(googleUserPwd),
                    photos: [ profile.photos[0].value ]
                });
                return done(null, newUser)
            }
    
        } catch(err) {
            return done(err, null)
        }
    }

));

passport.serializeUser(( user, done) => {
    done(null, user)
});

passport.deserializeUser(( user, done) => {
    done(null, user)
});

passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: githubCallback,
    scope: [ 'user:email' ],
  },

  async (accessToken, refreshToken, profile, done) => {
    // console.log("profile", profile);
    // console.log("profile.email", profile.email)

    try {
        
        
        const user = await User.findOne({ where: { email: profile.email }})

        if (user) {
            return done(null, user);
        } else {

            const newUser = await User.create({
                oauthId: profile.id,
                username: profile.displayName,
                email: profile.emails[0].value,
                hashedPassword: bcrypt.hashSync(googleUserPwd),
                photos: [ profile.photos[0].value ]
            });
            return done(null, newUser)
        }

    } catch(err) {
        return done(err, null)
    }
}
));
