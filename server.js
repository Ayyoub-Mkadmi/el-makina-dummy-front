const express = require("express");
const path = require("path");
const app = express();

// Serve all files in the repo directory
app.use(express.static(path.join(__dirname)));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
