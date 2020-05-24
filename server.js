const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const characters = require("./routes/api/character");
const campaigns = require("./routes/api/campaign");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/character", characters);
app.use("/api/campaign", campaigns);

const PORT = process.env.PORT || 3001;

// establish MongoDB var based on deployed or local
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/dmmgr";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true } );

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

// socket io code 
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (client) => { 
  /* Emit events to the client */ 
    
  client.on('characterUpdate', (charData) => {
    // console.log(charData);
    client.broadcast.emit('characterUpdated', charData);
  });
  
});

server.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});