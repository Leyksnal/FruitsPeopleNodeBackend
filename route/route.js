const express = require ('express')
const routes = express.Router()
const { postPerson, postfruit, readPeople, readfruits, onePerson, updatePerson, deleteperson } = require('../controller/controller')


// This routes does not have id
routes
    .route("/people")
    .post(postPerson)
    .get(readPeople)


// All this routes must pass id channel
routes
    .route("/people/:personId")
    .get(onePerson)
    .patch(updatePerson)
    .delete(deleteperson)



// This route for new comment add
routes
    .route("/people/:personId/fruit")
    .post(postfruit) 



// This routes to fetch comments
routes
    .route("/people/:personId/fruit")
    .get(readfruits) 

module.exports = routes