import express from 'express';
import cors from 'cors';
const app = express();

// Enable CORS for all routes
app.use(cors());

// Your existing routes and other middleware

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
