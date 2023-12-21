const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ratelimit = require("express-rate-limit");
require("dotenv").config();
const ecommerceRouter = require("./routes/ecommerce");
const musicRouter = require("./routes/music");
const jokesRouter = require("./routes/jokes");
const weatherroute = require('./routes/weather');
const newsroute = require('./routes/news');
const sportsroute = require('./routes/sports');
const universityroute = require('./routes/university');
const randomuserroute = require('./routes/randomuser');
const quotesroute = require('./routes/quotes');
const stocksroute = require('./routes/stocks');
const currencyroute = require('./routes/currencyconverter');
const dictionaryroute = require('./routes/words');
const genderizeroute = require('./routes/genderize');
const qrcoderoute = require('./routes/qrcode');
const onlinegamesroute = require('./routes/onlinegames');
const verify = require('./verification.js');
const app = express();
const port = process.env.PORT || 3000;

const apiratelimiter = ratelimit({
  windowMs: 1 * 60 * 1000,
  max:10
})

app.use(apiratelimiter);

app.use(cors()); 
app.use(express.json()); 


mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); 
  });
app.use(verify);
app.use("/ecommerce",ecommerceRouter);
app.use("/music", musicRouter);
app.use("/jokes",jokesRouter); 
app.use("/weather",weatherroute); 
app.use("/news",newsroute); 
app.use("/sports",sportsroute);
app.use("/university",universityroute); 
app.use("/randomuser",randomuserroute); 
app.use("/quotes",quotesroute); 
app.use("/stocks",stocksroute); 
app.use("/currency",currencyroute); 
app.use("/dictionary",dictionaryroute); 
app.use("/genderize",genderizeroute); 
app.use("/qrcode",qrcoderoute); 
app.use("/onlinegames",onlinegamesroute); 

app.get("/", (req, res) => {
  res.send("Welcome to Santhosh Technologies Api Hub");
});

app.get("*", (req, res) => {
  res.status(404).send("Content Not Found Here...☹️");
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});