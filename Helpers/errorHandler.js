module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string' || err.message === 'string') {
        // custom application err
        console.log(err, 8888)
        return res.status(400).json({ message: err.mesage||err});
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(400).json({ message: err.message });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({ message: 'Invalid Token' });
    }

    // default to 500 server error
    console.log(err.message, 8888)
    return res.status(500).json({ message: err.message });
}