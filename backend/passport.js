const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;


require('https').globalAgent.options.rejectUnauthorized = false;

const GOOGLE_CLIENT_ID = "829802030424-upbkdn5td9mjas9c6eco1ss33p7lru6d.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "a1d3dd3c78b99ea48f7c";
const GITHUB_CLIENT_SECRET = "b2a81fb859deb1576b1ff19474a2e53163339c7b"



passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/session/google/callback"
  },

// example codes from website below, because we won't have any db, so we will use "done" instead of "cb"
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }

    function(accessToken, refreshToken, profile, done) { // profile means user information
        done(null, profile)
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
    callbackURL: "/api/session/github/callback"
  },

    function(accessToken, refreshToken, profile, done) { // profile means user information
        done(null, profile)
    }
));
