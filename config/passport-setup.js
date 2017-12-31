const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");

passport.use(new googleStrategy({
    //options for strategy
}), ()=> {
    //passport callback function
});