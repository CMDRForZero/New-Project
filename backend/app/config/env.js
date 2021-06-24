const env = {
    database: 'testclubmap',
    username: 'postgres',
    password: 'super',
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 300000,
        idle: 10000
    }
};

module.exports = env;