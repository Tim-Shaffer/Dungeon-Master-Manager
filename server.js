const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const characters = require("./routes/api/character");
const campaigns = require("./routes/api/campaign");
var path = require("path");

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

// added the static to allow the soundfx on Heroku
app.use(express.static("./client/src/components/CreateCampaign/sounds/"));
app.use(express.static("./client/src/components/CreatePlayer/sounds/"));
app.use(express.static("./client/src/components/DMcard/sounds/"));

// establish MongoDB var based on deployed or local
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/dmmgr";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true } );

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

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