const User = require('../database/models/user')

module.exports = { 
    async show(req, res) { 
        await User.find({}, (err, users) => { 
            if (err) { 
                return res.status(500).json({ error: "Server error "})
            }

            return res.status(200).json(users)
        })
    }
}