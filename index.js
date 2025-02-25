const app = require("./src/app");

const BASE_URL = process.env.BASE_URL || `https://${process.env.VERCEL_URL}`;

console.log(`Server will run on ${BASE_URL}`);

module.exports = app;