const router = require("express").Router();

router.get("/login", (req, res) => {
    res.render('login');
});

router.get("/google", (req, res) => {
    //handle with passport

    res.send("Login with Google");
});

router.get("/logout", (req, res) => {
    //handle with passport

    res.send("Logging out");
});

module.exports = router; 