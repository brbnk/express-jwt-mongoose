const UsersController = require("../../controllers/UsersControllers")

module.exports = app => { 
    app.route("/users")
        .post(UsersController.store)
}