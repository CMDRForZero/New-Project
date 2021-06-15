module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        date: {
            type: Sequelize.DATE
        }
    });

    return Event;
};