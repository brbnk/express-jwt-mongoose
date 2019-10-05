const passport = require('passport')
const UsersController = require('../../controllers/UsersController')
const router = require('express').Router()

module.exports = app => { 
    router.route("/")
        .get((req, res) =>  res.json({ msg: "User Authorized!" }))

    router.route("/users")
        .get(UsersController.show)
            
    app.use(
        "/home", 
        passport.authenticate('jwt', { session: false }),
        router
    )
}