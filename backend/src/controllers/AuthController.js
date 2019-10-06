const User = require('../database/models/user')
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = { 
    async register (req, res) { 
        const { password, name, email } = req.body
        bcrypt.hash(password, saltRounds)
            .then(async (hash) => {
                await User.create({ name, email, password: hash }, (err, newUser) => { 
                    if (err) { 
                        return res.status(400).json({ error: "User already exists!" })
                    }
        
                    return res.json({ message: "User created!" })
                })
            })
    }
}