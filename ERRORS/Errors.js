
class ValidationUserError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ValidationUserError'
    };
};

class ConnectionError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ConnectionError'
    };
};

class ValidationFieldError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ValidationFieldError'
    };
};



module.exports = { 
    ValidationUserError,
    ConnectionError,
    ValidationFieldError,
}