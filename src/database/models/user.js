const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: { 
        type: String
    },
    password: { 
        type: String
    },
    email: { 
        type: String,
        unique: true
    }
})

userSchema.method('compare', async (formPass, userPass) => { 
    return bcrypt.compare(formPass, userPass)
})

const User = mongoose.model("User", userSchema)

module.exports = User