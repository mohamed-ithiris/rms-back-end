// authMiddleware.js
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    // Get the JWT token from the request headers
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    // Check if the token is provided
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Verify the token
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.employeeId = decoded.employeeId;
        req.name = decoded.name;
        req.role = decoded.role;
        next();
    });
};
