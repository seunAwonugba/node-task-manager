const asyncWrapper = (callBack) => {
    //since what i'm trying to avoid is multiple async / try and catch blocks here and there, lets just have one here
    //so this async wrapper just returns an async function, NOTE, every async function must be wrapped in a try and catch

    //dont forget that call back has access to express middleware req,res,and next from express tutorial, so inside the
    //new async function i'm wrapping my call back function, i want to still be able to access my req, res, next, so i'm passing express req, res, and next to my async wapper function, that contains the main ascyn function that wraps my express
    return async (req, res, next) => {
        //since its async again, try and catch

        try {
            await callBack(req, res, next);
        } catch (err) {
            next(err);
        }
    };
};

//with this head over to the controllers and remove the try and catch blocks

module.exports = { asyncWrapper };
