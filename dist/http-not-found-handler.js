"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
function default_1(req, res, next) {
    next(new errors_1.NotFoundError());
}
exports.default = default_1;
