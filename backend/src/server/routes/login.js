const AuthController = require('../../controllers/AuthController')
const router = require('express').Router()
const passport = require('passport')

const jwt = require("jsonwebtoken")
const { secretKey } = require('../../environment/vars')

module.exports = app => {     
    router.post("/login", (req, res, next) => { 
        passport.authenticate('local', { session: false }, (err, user, info) => { 
            if (err) { 
                return res.status(500).json({ err })
            }

            if (!user) { 
                const { message } = info
                return res.status(401).json({ message })
            }

            const { _id } = user
            const token = jwt.sign({ _id }, secretKey, { expiresIn: '1h' })

            res.cookie('jwt', token, { 
                httpOnly: false, 
                secure: false
            })
            .status(200)
            .send({ msg: "Succesful Login!" })

        })(req, res, next)
    })
    
    router.post("/register", 
        AuthController.register)

    app.use("/auth", router)
}