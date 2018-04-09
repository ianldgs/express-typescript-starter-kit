import { NotFound } from "http-errors"

export default function(req, res, next) {
    next(new NotFound())
}