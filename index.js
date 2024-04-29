const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
const verify = require("./verification")

const routes = {
  ecommerce: require("./routes/ecommerce"),
  music: require("./routes/music"),
  jokes: require("./routes/jokes"),
  weather: require('./routes/weather'),
  news: require('./routes/news'),
  sports: require('./routes/sports'),
  insightful: require('./routes/insightful'),
  university: require('./routes/university'),
  randomuser: require('./routes/randomuser'),
  quotes: require('./routes/quotes'),
  stocks: require('./routes/stocks'),
  currency: require('./routes/currencyconverter'),
  dictionary: require('./routes/words'),
  genderize: require('./routes/genderize'),
  qrcode: require('./routes/qrcode'),
  onlinegames: require('./routes/onlinegames'),
  animedetails: require('./routes/animedetails'),
  books: require('./routes/books'),
  images: require('./routes/images'),
  maps: require('./routes/maps'),
  recipe: require('./routes/recipe'),
  giphy: require('./routes/giphy'),
  movieandseries: require('./routes/movie'),
  conversational: require('./routes/convertional'),
};

const app = express();
const port = process.env.PORT || 3000;


const apiRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10 
});


app.use(apiRateLimiter);
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.ATLAS_URI, {
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
Object.entries(routes).forEach(([routePath, routeHandler]) => {
  app.use(`/${routePath}`, routeHandler);
});


app.get("/", (req, res) => {
  res.send("Welcome to Santhosh Technologies Api Hub");
});

app.get("*", (req, res) => {
  res.status(404).send("Content Not Found Here...☹️");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});