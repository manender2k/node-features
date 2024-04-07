module.exports = {
    maxConnections: 10,
    pool: true,
    from: process.env.MAIL_FROM ? process.env.MAIL_FROM : process.env.MAIL_USERNAME,
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    NODE_ENV: process.env.NODE_ENV,
    secureConnection: true,
    emailTo: process.env.MAIL_OPTIONS_TO ? process.env.MAIL_OPTIONS_TO : config?.MAIL_OPTIONS_TO,
    emailCc: process.env.MAIL_OPTIONS_CC ? process.env.MAIL_OPTIONS_CC : config?.MAIL_OPTIONS_CC,
    auth: {
        user: process.env.MAIL_USERNAME ? process.env.MAIL_USERNAME : config?.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD ? process.env.MAIL_PASSWORD : config?.MAIL_PASSWORD,
    },
    tls: { ciphers: "SSLv3" }
};