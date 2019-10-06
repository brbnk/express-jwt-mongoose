const app = require('express')()
const consign = require('consign')

consign({ verbose: true, locale: 'pt-br', cwd: "backend/src" })
    .include('middlewares')
    .then('server')
    .into(app)
