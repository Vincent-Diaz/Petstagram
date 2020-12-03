const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);

const passport = require("./config/passport")
const auth = require("./routes/api/auth")

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Express session
app.use(
  session({
  secret:"very secret this is",
  resave: false,
  saveUninitialized:true,
  store: new MongoStore({mongooseConnection:mongoose.connection})
  })
);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", auth)
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/petstagram"
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
