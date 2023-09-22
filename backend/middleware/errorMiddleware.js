const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404);
    next(error); // it will pass the error to errorhandler 
}

const errorHandler = (err, req, res, next) => {

    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if (err.name === 'CastError' && err.kind === 'objectId') { // moongose gives a specific error so to handle that we have made this if statement
        statusCode = 404;
        message = 'Resource Not Found';
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack // use to see the order in which functions are called i.e stack
    })
}

export {
    notFound,
    errorHandler
}