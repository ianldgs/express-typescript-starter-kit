"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = require("http-errors");
function default_1(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    if (req.app.get('env') === 'development') {
        //build a pretty message to help the developer :)
        return next(err);
    }
    //avoid the error message "ENOENT, no such file or directory 'full/path/to/file'"
    //if the file or dir wasn't found and the error wasn't handled
    //it has a big chance to be a 404
    //this could also have `|| err instanceof ModelNotFoundError`
    if (err.code === 'ENOENT') {
        err = new http_errors_1.NotFound();
        res.status(err.status);
    }
    //in production, dont render errors that might give up infraestructure or some code
    //just 4xx errors will return a message to help the client
    if (err.status && err.status < 500) {
        res.json({ message: err.message });
    }
    res.end();
}
exports.default = default_1;
