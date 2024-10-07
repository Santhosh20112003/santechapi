const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
const verify = require("./verification");

const routes = {
  ecommerce: require("./routes/ecommerce"),
  music: require("./routes/music"),
  jokes: require("./routes/jokes"),
  weather: require("./routes/weather"),
  news: require("./routes/news"),
  sports: require("./routes/sports"),
  insightful: require("./routes/insightful"),
  university: require("./routes/university"),
  randomuser: require("./routes/randomuser"),
  quotes: require("./routes/quotes"),
  stocks: require("./routes/stocks"),
  currency: require("./routes/currencyconverter"),
  dictionary: require("./routes/words"),
  genderize: require("./routes/genderize"),
  qrcode: require("./routes/qrcode"),
  onlinegames: require("./routes/onlinegames"),
  animedetails: require("./routes/animedetails"),
  books: require("./routes/books"),
  images: require("./routes/images"),
  maps: require("./routes/maps"),
  recipe: require("./routes/recipe"),
  giphy: require("./routes/giphy"),
  jarvis: require("./routes/Gemini"),
  movieandseries: require("./routes/movie"),
  conversational: require("./routes/convertional"),
};

const app = express();
const port = process.env.PORT || 3000;

const apiRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
});

app.use(apiRateLimiter);
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

const welcome = `<b><h2>Welcome to Santech Api Endpoints</h2></b> 
<h3>List of Apis</h3>
<ol>
<li>Ecommerce Api</li>
<li>Weather Api</li>
<li>Random User Api</li>
<li>News Api</li>
<li>Sports Player Api</li>
<li>Stocks Api</li>
<li>Quotes Api</li>
<li>University Api</li>
<li>Music Api</li>
<li>Jokes Api</li>
<li>Dictionary Api</li>
<li>Currency Api</li>
<li>Genderize Api</li>
<li>QrCode Generator Api</li>
<li>Online Games Api</li>
<li>Anime Details Api</li>
<li>Books Api</li>
<li>Maps Api</li>
<li>Images Api</li>
<li>Recipe Api </li>
<li>Giphy & Stickers Api</li>
<li>Movie & Series Api</li>
<li>Conversational Api</li>
<li>Insightful Blog Api</li>
<li>Jarvis Ai Api</li>
</ol>
<p>for more details, please do refer <a href='https://santechapihubs.vercel.app/apilist' >Santech ApiHub</a> for Docs refer <a href='https://santech.gitbook.io/docs' >https://santech.gitbook.io/docs</a>. </p>
`;

app.get("/", (req, res) => {
  res.send(welcome);
});

app.use(verify);
Object.entries(routes).forEach(([routePath, routeHandler]) => {
  app.use(`/${routePath}`, routeHandler);
});

app.get("*", (req, res) => {
  res.status(404).send("Content Not Found Here...☹️");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
