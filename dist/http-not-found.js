"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = require("http-errors");
function default_1(req, res, next) {
    next(new http_errors_1.NotFound());
}
exports.default = default_1;
