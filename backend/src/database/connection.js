const mongoose = require('mongoose')
const { connection_string } = require('../environment/vars')

const connectDb = () => {
    return mongoose.connect(connection_string, { 
        useNewUrlParser: false,
        useUnifiedTopology: true 
    })
};

module.exports = connectDb