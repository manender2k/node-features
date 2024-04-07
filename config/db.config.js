module.exports = {
    local: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DBHOST,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            bigNumberStrings: true
        },
        logging: true
    },
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DBHOST,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            bigNumberStrings: true
        },
        logging: true
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DBHOST,
        port: 3306,
        dialect: process.env.DB_DIALECT,
        ssl: true,
        dialectOptions: {
            bigNumberStrings: true,
            ssl: {
                // ca: prod_ca,
            }
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 60000,
            idle: 10000,
        },
        logging: false
    }
}