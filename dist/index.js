"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const logger = require("morgan");
const basicAuth = require("express-basic-auth");
const bodyParser = require("body-parser");
const bugsnag = require("bugsnag");
const http_not_found_1 = require("./http-not-found");
const http_error_handler_1 = require("./http-error-handler");
const utils_1 = require("./utils");
require("./bootstrap");
const routes_1 = require("./routes");
const ONE_MINUTE = 1 * 60 * 1000;
process.on('unhandledRejection', (reason, p) => {
    console.log('Possibly Unhandled Rejection:', p, reason);
});
const app = express();
// do not expose your infrastructure
app.disable('x-powered-by');
if (process.env.BUGSNAG_KEY) {
    bugsnag.register(process.env.BUGSNAG_KEY);
    app.use(bugsnag.requestHandler);
    app.use(bugsnag.errorHandler);
}
if (process.env.NODE_ENV !== 'development') {
    app.use(basicAuth({
        challenge: true,
        users: {
            // TODO: change this!
            admin: '123456',
            dev: '654321',
            client: '123654',
        },
    }));
}
app.use(logger('tiny'));
// accept requests with json body
// this is the current default, for many web applications
// if you use angular $http, this is how you will receive the data
app.use(bodyParser.json());
// accept requests with urlencoded body
// this is the php/jquery default
// many front-ends send the data in this form
app.use(bodyParser.urlencoded({
    // allow complex data structures
    extended: true,
}));
app.use('/docs', express.static(`${__dirname}/../docs`));
app.use('/', routes_1.default);
// no route matched. place your routes before this
app.use(http_not_found_1.default);
// transform `new Error()` in http responses with error codes
app.use(http_error_handler_1.default);
const port = utils_1.normalizePort(process.env.PORT || 8080);
app.set('port', port);
// TODO: allow config to set either http or https
const server = new http_1.Server(app);
server.timeout = parseInt(process.env.TIMEOUT_SECONDS, 10) * 1000 || ONE_MINUTE;
server.listen(port, () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
});
server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
    switch (error.code) {
        case 'EACCES':
            console.log(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});
