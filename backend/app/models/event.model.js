module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
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