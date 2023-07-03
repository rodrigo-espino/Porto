const UserORM = require("../models/userORM")

var passport = require('passport')
var LocalStrategy = require('passport-local')

passport.use(new LocalStrategy(async function verify(username, password, cb){
    let user = await UserORM.findOne({
        where:{
            "username": username
        }
    })

    if (!user){
        return cb(null, false, { message: 'Incorrect username or password.'});
    }
    else if (user.pass != password){
        return cb(null, false, { message: 'Incorrect username or password'});
    }
    else{
        return cb(null, user);
    }
}));

passport.serializeUser(function(user, cb){
    cb(null, user);
})

passport.deserializeUser(function(user, cb) {
    cb(null, user);
})

module.exports = passport;