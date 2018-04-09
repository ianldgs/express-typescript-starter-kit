"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
exports.normalizePort = normalizePort;
