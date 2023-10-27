const express = require('express');
const asyncHandler = require('express-async-handler');
const passport = require("passport");

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// Google and Github social login

// const CLIENT_URL = "http://localhost:3000";
const CLIENT_URL = "https://catniip-26d640bb2067.herokuapp.com/";

router.get("/google", passport.authenticate("google", { scope: ["profile"] } ));

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: `${CLIENT_URL}/products`,
    failureRedirect: "/login/failed",
}));

router.get("/github", passport.authenticate("github", { scope: ["profile"] } ));

router.get("/github/callback", passport.authenticate("github", {
    successRedirect: `${CLIENT_URL}/products`,
    failureRedirect: "/login/failed",
}));

router.get('/login/success', (req, res) => {
  if (req.user) {
      res.status(200).json({
          success: true,
          message: "successfull",
          user: req.user,
          // cookies: req.cookies
      })
  }
})

router.get("/login/failed", (req, res) => {
  res.status(401).json({
      success: false,
      message: "Failure"
  })
});

router.get("/logout", (req, res) => {
    
  req.logout(); 
  
  // Passport exposes a logout() function on req that can be called from any route handler which needs to terminate a login session
  // Invoking logout() will remove the req.user property and clear the login session
  // https://www.passportjs.org/concepts/authentication/logout/
  
  res.clearCookie("token"); // for regualr logout
  res.redirect(`${CLIENT_URL}/products`);
})


// Regular login

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors
]

// Login
router.post(
  '/',
  validateLogin,
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;
    const user = await User.login({ credential, password });

    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);


// Logout
router.delete("/", (req, res) => {
  res.clearCookie("token");
  return res.json({ message: 'success'})
})

// Restore session user
router.get(
  '/',
  restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) {
      return res.json({
        // user: user.toSafeObject();
        user: user
      });
    } else return res.json({});
  }
);



module.exports = router;
