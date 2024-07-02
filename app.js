const express = require("express");
const bodyParser = require("body-parser");
const marked = require("marked");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(cors());
// API endpoint to convert Markdown to HTML
app.post("/convert", (req, res) => {
  const { markdown } = req.body;
  const html = marked.parse(markdown);
  res.status(200).json({ html });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
