// Middleware function for authorization
exports.authorize = (requiredRoles) => (req, res, next) => {
    const userRole = req.role;

    // Check if the user has one of the required roles
    if (!requiredRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Unauthorized access' });
    }
    
    // User has one of the required roles, proceed to the next middleware
    next();
};