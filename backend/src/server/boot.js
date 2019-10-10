const { port } = require('../environment/vars')
const connectDb = require('../database/connection')

module.exports = app => {
    connectDb()
        .then(async () => { 
            console.log(`\nConnected to MongoDB`)
            app.listen(port, () => { 
                console.log(`Server is listenning on port ${port}`)
            })
        }) 
        .catch(error => { 
            console.log(error)
        })
}