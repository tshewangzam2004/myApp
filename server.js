const express = require("express");
const app = express();
const port = process.env.PORT || 8060;

// Route for homepage
app.get("/", (req, res) => {
  res.send("Manju Rai: Hello, This is my backend running on Express!");
});

// Another example route
app.get("/about", (req, res) => {
  res.send("This is the About page of my backend app.");
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server started at http://localhost:${port}`);
});
