module.exports = app => {
    const events = require("../controllers/event.controller");

    let router = require("express").Router();

    //create new event
    router.post("/", events.create);

    //retrieve all events
    router.get("/", events.findAll);

    //retrieve a single event with id
    router.get("/:id", events.findOne);

    //update an event with id
    router.put("/:id", events.update);

    //delete an event with id
    router.delete("/:id", events.delete);

    //delete all events
    router.delete("/", events.deleteAll);

    app.use('/api/events', router);


};