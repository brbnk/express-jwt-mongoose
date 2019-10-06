const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../database/models/user')
const ObjectId = require('mongoose').ObjectId

const { secretKey } = require('../environment/vars')

// Local Strategy
passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    async function (username, password, done) { 
        await User.findOne({ email: username }, (err, user) => { 
            if (err) {
                return done()
            }

            if (!user) { 
                return done(null, false, { message: 'Incorrect username.' })
            }

            user.compare(password, user.password)
                .then(match => { 
                    if (!match) {
                        return done(null, false, { message: 'Incorrect password.' })
                    }
        
                    return done(null, true)
                })
        })
    }
))

passport.serializeUser((user, done) => { 
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => { 
    await User.findById({ _id: ObjectId(id) }, (err, user) => { 
        done(err, user)
    })
})

// JwtStrategy
const opts = { 
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey
}

passport.use(new JwtStrategy(opts, async (payload, done) => { 
    await User.findOne({ _id: payload._id }, (err, user) => {         
        if (err) { 
            return done(err, false)
        }

        if (!user) { 
            return done(null, false)
        }

        return done(null, { id: user._id })
    })
}))


module.exports = app => { 
    app.use(passport.initialize())
}