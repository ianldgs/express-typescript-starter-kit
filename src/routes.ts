import { Router, Request, Response, NextFunction } from "express"
import * as timeout from "connect-timeout"
import { CustomError } from "./errors";

const router = Router()

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
router.get('/', timeout('10s'), (req: Request, res: Response, next: NextFunction) => {
    const message = 'Hello World!'
    res.json({ message }).end()
})

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
router.get('/greetings/:name', (req: Request, res: Response, next: NextFunction) => {
    const message = `Hello, ${req.params.name}!`
    res.json({ message }).end()
})

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
router.get('/error', (req: Request, res: Response, next: NextFunction) => {
    throw new CustomError()
})

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
router.get('/timeout', timeout('2s'), (req: Request, res: Response, next: NextFunction) => {
    //if you don't call `res.end()` or `throw new Error()`
    //before the specified timeout or default timeout
    //a 500 error response will be displayed
})

//default timeout. place your routes before this
router.use(timeout('5s'))

export default router