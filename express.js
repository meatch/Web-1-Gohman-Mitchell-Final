/*===================================
||
|| NodeJS Server with Express Framework
||
===================================*/
/*---------------------------
| Environment Vars
---------------------------*/
require('dotenv').config();

/*---------------------------
| Resources
---------------------------*/
const path = require('path');
const express = require('express');

/*---------------------------
| Express
---------------------------*/
/* Initialize ---------------------------*/
const app = express();

/* JSON support for request response ---------------------------*/
app.use(express.json());

/* Serve the static files from the React app ---------------------------*/
app.use(express.static(path.join(__dirname, 'build')));

/*---------------------------
| Port Management
---------------------------*/
const HEROKU_PORT = process.env.PORT;
const EXPRESS_PORT = process.env.EXPRESS_PORT;
const PORT = (EXPRESS_PORT) ? EXPRESS_PORT : HEROKU_PORT;
const FINAL_PORT = (PORT) ? PORT : 5000; // In case none are provided fall back to 5000

/*---------------------------
| Start the Server
---------------------------*/
app.listen(FINAL_PORT, () => {
    console.log('Express Server is up and running. Currently listening on port: ' + FINAL_PORT );
});