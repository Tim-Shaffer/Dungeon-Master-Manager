var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var expressValidator = require("express-validator");
var flash = require("connect-flash");
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mongo = require("mongodb");
var mongoose = require("mongoose");
var db = mongoose.connection;

// var routes = require('./routes/index');
// var users = require('./routes/users');
const routes = require("./routes");

// Init App
var app = express();


// BodyParser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// // Set Static Folder
// app.use(express.static(path.join(__dirname, 'public')));

// // Express Session
// app.use(session({
//     secret: 'secret',
//     saveUninitialized: true,
//     resave: true
// }));

// // Passport init
// app.use(passport.initialize());
// app.use(passport.session());

// // Express Validator - directly from github
// app.use(expressValidator({
//     errorFormatter: function(param, msg, value) {
//         var namespace = param.split('.')
//         , root = namespace.shift()
//         , formParam = root;

//         while(namespace.length) {
//             formParam += '[' + namespace.shift() + ']';
//         }

//         return {
//             param: formParam,
//             msg: msg,
//             value: value
//         };
//     }
// }));

// // Connect Flash
// app.use(flash());

// // Global Vars
// app.use(function (req, res, next) {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     res.locals.user = req.user || null;
//     next();
// });

// app.use('/', routes);
// app.use('/users', users);

// Add routes
app.use(routes);

const PORT = process.env.PORT || 3001;

// establish MongoDB var based on deployed or local
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/dmmgr";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true } );

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});