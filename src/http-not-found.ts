import { NotFound } from 'http-errors'
import { NextFunction } from 'express'

export default function(req, res, next: NextFunction) {
    next(new NotFound())
}
