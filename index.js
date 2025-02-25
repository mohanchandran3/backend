const app = require("./src/app");

const BASE_URL = process.env.BASE_URL || `https://${process.env.VERCEL_URL}`;

app.listen(PORT, () => {
  console.log(`Server is running on ${BASE_URL}`);
});