module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
        cordX: {
            type: Sequelize.FLOAT
        },
        cordY: {
            type: Sequelize.FLOAT
        },
        name: {
            type: Sequelize.STRING
        },
        desk: {
            type: Sequelize.TEXT
        },
        type: {
            type: Sequelize.TEXT
        }
    });

    return Event;
};