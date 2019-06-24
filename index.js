const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require('body-parser');
const passport = require('passport');
//bring all files
const auth = require('./routes/api/auth');
const questions = require('./routes/api/questions');
const profile = require('./routes/api/profile');

const app = express();

//middlewares
  //for body-parser
  app.use(bodyparser.urlencoded({extended:false}));
  app.use(bodyparser.json());

//mongoDB config
const db = require("./setup/myurl").mongoURL;

// Attempt to connect to dataBase
mongoose
  .connect(db)
  .then(()=>console.log('MongoDB Connected Successfully'))
  .catch(err => console.log('Error in MongooseDb: '+err));

  //passport middleware
  app.use(passport.initialize());

  require('./strategies/jsonwtstrategy')(passport)


// PORT
const PORT = process.env.PORT || 5000;

// just for testing
app.get("/", (req, res) => {
  res.send("Hey There bigStack");
});

// actual routes
app.use('/api/auth',auth);
app.use('/api/questions',questions);
app.use('/api/profile',profile);



app.listen(PORT, () => console.log("Server Started on PORT: " + PORT));
