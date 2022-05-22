const { CustomError } = require("../errors/customError");

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    if (err instanceof CustomError) {
        res.status(err.statusCode).json({
            success: false,
            data: `An error occured. Caused by ${err.message}`,
        });
        return;
    } else {
        res.status(500).json({
            success: false,
            data: `An error occured. Caused by ${err.message}`,
        });
        return;
    }
};

module.exports = { errorHandlerMiddleware };
