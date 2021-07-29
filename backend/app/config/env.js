const env = {
    database: 'clubmap',
    username: 'postgres',
    password: 'secret',
    host: 'dev_postgres_1',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 300000,
        idle: 10000
    }
};

module.exports = env;
