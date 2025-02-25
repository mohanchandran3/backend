const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-commerce Product API",
      version: "1.0.0",
      description: "API for managing e-commerce products",
    },
    servers: [
      {
        url: process.env.BASE_URL || `https://${process.env.VERCEL_URL}`,
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(options);
module.exports = swaggerDocs;