"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const timeout = require("connect-timeout");
const errors_1 = require("./errors");
const router = express_1.Router();
/**
 * @api {get} /not-found Not Found
 * @apiVersion 1.0.0
 *
 * @apiGroup Main
 * @apiName NotFound
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 404 Not Found
 */
/**
 * @api {get} / Hello World
 * @apiVersion 1.0.0
 *
 * @apiGroup Main
 * @apiName HelloWorld
 *
 * @apiSuccess {String} message The message
 * @apiSuccessExample {json} Response-Example:
 * {
 *     "message": "Hello World!"
 * }
 */
router.get('/', timeout('10s'), (req, res, next) => {
    const message = 'Hello World!';
    res.json({ message }).end();
});
/**
 * @api {get} /greetings/:name Greetings
 * @apiVersion 1.0.0
 *
 * @apiGroup Main
 * @apiName Greetings
 *
 * @apiParam :name Your name
 *
 * @apiSuccess {String} message The message
 * @apiSuccessExample {json} Response-Example:
 * {
 *     "message": "Hello, Jhon!"
 * }
 */
router.get('/greetings/:name', (req, res, next) => {
    const message = `Hello, ${req.params.name}!`;
    res.json({ message }).end();
});
/**
 * @api {get} /error Internal Error
 * @apiVersion 1.0.0
 *
 * @apiGroup Main
 * @apiName InternalError
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 500 Internal Error
 */
router.get('/error', (req, res, next) => {
    throw new errors_1.CustomError();
});
/**
 * @api {get} /timeout Timeout
 * @apiVersion 1.0.0
 *
 * @apiGroup Main
 * @apiName Timeout
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 503 Service Unavailable
 */
router.get('/timeout', timeout('2s'), (req, res, next) => {
    // if you don't call `res.end()` or `throw new Error()`
    // before the specified timeout or default timeout
    // a 500 error response will be displayed
});
// default timeout. place your routes before this
router.use(timeout('5s'));
exports.default = router;
