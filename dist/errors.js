"use strict";
//here define custom Errors
//that can help with knowing what happened on the catch block
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor() {
        super('Customized error');
    }
}
exports.CustomError = CustomError;
