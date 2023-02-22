const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Hello Parn Sud xso');
});

app.use(morgan('combined'));

app.listen(port, () => {
    debug("Test port" + chalk.red(port));
});