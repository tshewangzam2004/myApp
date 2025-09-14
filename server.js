const express = require("express");
const app = express();
const port = process.env.port || 8060;

app.get("/",(req, res) => {
  res.send("Manju Rai! Hello, World!");
});

server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
