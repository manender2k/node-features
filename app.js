require('dotenv').config();
const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = config.APP_PORT || 3000;
const host = config.APP_HOST || 'localhost';
const enable_cron = config.ENABLE_CRON;

app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});

app.get("/", (req, res) => {
    res.send(`Event Management System is running on http://${host}:${port}`);
});