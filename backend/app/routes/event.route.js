//один из вариантов route

module.exports = function (app) {

    const events = require('../controller/event.controller');

    //create new event
    app.post('/api/events/create', events.create);

    // Retrieve all Books
    app.get('/api/events', events.findAll);

    // Retrieve a single Book by Id
    app.get('/api/events/:id', events.findById);

    // Update a Book with Id
    app.put('/api/events/:id', events.update);

    // Delete a Book with Id
    app.delete('/api/events/:id', events.delete);


}

//другой вариант
/*
module.exports = app => {
    const events = require("../controllers/event.controller");

    let router = require("express").Router();

    //create new event
    router.post("/", events.create);

    //retrieve all events
    router.get("/", events.findAll);

    //retrieve a single event with id
    router.get("/:id", events.findById);

    //update an event with id
    router.put("/:id", events.update);

    //delete an event with id
    router.delete("/:id", events.delete);

    //delete all events
    router.delete("/", events.deleteAll);

    app.use('/api/events', router);


}

 */