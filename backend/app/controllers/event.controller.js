const db = require('../config/db.config');
const Events = db.event;

//post event
exports.create = (req, res) => {
    // Save event to PostgreSQL database
    Events.create({
        name: req.body.name,
        desk: req.body.desk,
        type: req.body.type,
        //cords:
    }).then(event => {
        // Send created event to client
        res.send(event);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

// Fetch all events
exports.findAll = (req, res) => {
    Events.findAll().then(event => {
        // Send all events to Client
        res.send(event);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

// Find a Customer by Id
exports.findById = (req, res) => {
    Events.findById(req.params.id).then(event => {
        res.send(event);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

// Update a event
exports.update = (req, res) => {
    let event = req.body;
    const id = req.params.id;
    Events.update({
            name: req.body.name,
            desk: req.body.desk,
            type: req.body.type,
            //cords:
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.status(200).send(event);
        }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

// Delete a event by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    Events.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('event has been deleted!');
    }).catch(err => {
        res.status(500).send("Fail to delete!");
    });
};