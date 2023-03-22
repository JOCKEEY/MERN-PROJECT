class Httperror extends Error {
    constructor(message?: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

// Status code : 401
export class UnauthorizedError extends Httperror {}

// Status code : 409
export class ConflictError extends Httperror {}