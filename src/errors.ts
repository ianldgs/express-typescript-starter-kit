// here, define custom Errors
// they can help with knowing what happened on the catch block

export class CustomError extends Error {
    constructor() {
        super('Customized error')
    }
}