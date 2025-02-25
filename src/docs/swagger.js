const swaggerJsdoc = require("swagger-jsdoc");

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-commerce Product API",
      version: "1.0.0",
      description: "API for managing e-commerce products",
    },
    servers: [{ url: BASE_URL }], 
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(options);
module.exports = swaggerDocs;
