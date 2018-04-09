//here define custom Errors
//that can help with knowing what happened on the catch block

export class CustomError extends Error {
    constructor() {
        super('Customized error')
    }
}