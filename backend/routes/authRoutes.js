const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:5173/home', // redirect to React page
    failureRedirect: 'http://localhost:5173/login'
  })
);

// To get current user info
router.get('/me', (req, res) => {
  res.json(req.user || null);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).json({ message: 'Logout failed' });
    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      res.status(200).json({ message: 'Logged out' });
    });
  });
});


module.exports = router;
