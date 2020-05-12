var express = require("express");
var router = express.Router();
const userRoutes = require("./user");

// Routes
router.use("/user", userRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Export routes for server.js to use.
module.exports = router;