const User = require('../database/models/user')

module.exports = { 
    async store(req, res) { 
        const user = req.body

        await User.create(user, (err, newUser) => { 
            if (err) { 
                return res.status(400).json({ error: err.errmsg })
            }

            return res.json(newUser)
        })

    } 
}