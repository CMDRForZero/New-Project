const db = require("../models");
const Event = db.event;
const Op = db.Sequelize.Op;

//create
exports.create = (req, res) => {
    //validate
    if (!req.body.title) {
        res.status(400).send({
            message: "empty content"
        });
        return;
    }

    //create
    const event = {
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    };

    //save in DB
    Event.create(event)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error while creating the event"
            });
        });

};

//retrieve all events/ find by title
exports.findAll = (req, res) => {
    const title = req.query.title;
    let condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

    Event.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error while retrieving events"
            });
        });

};

//find a single by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Event.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving event with id=" + id
            });
        });
};

//update
exports.update = (req, res) => {
    const id = req.params.id;

    Event.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Event was updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot update event with id=${id}. Maybe event was not found or req.body is empty`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating event with id=" + id
            });
        });
};

//delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Event.destroy({
        where: {id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `Cannot delete event with id=${id}. Maybe event was not found`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete event with id=" + id
            });
        });
};

//delete all
exports.deleteAll = (req, res) => {
    Event.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Events were deleted successfully` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error with removing all events"
            });
        });
};

/*
//find all today event
exports.findAllToday = (req, res) => {

};

 */