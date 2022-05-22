class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "Custom Error";
        this.statusCode = statusCode;
    }
}

const customErrorFunction = (message, statusCode) => {
    return new CustomError(message, statusCode);
};

module.exports = { CustomError, customErrorFunction };
