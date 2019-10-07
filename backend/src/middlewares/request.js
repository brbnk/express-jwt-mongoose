const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

module.exports = app => { 
    app.use(express.urlencoded({ 
        extended: false 
    }))
    
    app.use((req, res, next) => { 
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')

        // Request Methods you wisht to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    })
    app.use(bodyParser.json())
    app.use(cookieParser())
    app.use(cors({ 
        origin: 'http://localhost:8080'
    }))
    app.use(morgan('dev'))
}