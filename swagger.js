const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'RMS Authentication API Documentation',
            version: '1.0.0',
            description: 'RMS Documentation for authentication endpoints',
            contact: {
                name: "Mohamed ithiris",
                email: "mohamedithirisvar@gmail.com"
            }
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Development server"
            }
            // Add more servers if needed for other environments (e.g., production, staging)
        ],
    },
    apis: [
        './routes/authRoutes.js',
        './routes/customerRoutes.js',
        './routes/employeeRoutes.js',
        './routes/feedbackRoutes.js',
        './routes/inventoryRoutes.js',
        './routes/menuItemRoutes.js',
        './routes/orderRoutes.js',
        './routes/promotionRoutes.js'
    ], // Path to your authentication routes file
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/rms-api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
