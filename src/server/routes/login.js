const AuthController = require('../../controllers/AuthController')
const router = require('express').Router()
const passport = require('passport')

const jwt = require("jsonwebtoken")
const { secretKey } = require('../../environment/vars')

module.exports = app => {     
    router.post("/login",
        passport.authenticate('local', { 
            session: false
        }),
        (req, res)  => { 
            const { _id } = req.user

            const payload = { 
                _id,
                expires: Date.now() + parseInt('100000'),
            }

            const token = jwt.sign(JSON.stringify(payload), secretKey)

            res.cookie('jwt', token, { httpOnly: true, secure: true })
            res.status(200).send({ msg: "Succesful Login!" })
        }
    ) 
    
    router.post("/register", 
        AuthController.register)

    app.use("/auth", router)
}