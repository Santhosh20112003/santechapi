const router = require("express").Router();
const axios = require("axios");
const geminicheck = require("../check/Gemini");

router.route("/chat/:q").get(geminicheck, (req, res) => {
  const question = req.params.q;
  if (question) {
    try {
      axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDMcL9MqDTuWHNayx1cAG3G89v-7amvPws`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      })
        .then((result) => {
          res.status(200).json(result.data.candidates[0].content.parts[0].text);
        })
        .catch((err) => {
          res.status(400).json({ message: "Keyword Not Found" });
        });
    } catch (e) {
      res.status(500).json("Error Occurred in Backend");
    }
  } else {
    res.status(402).json("Parameter required for Ai Communication.");
  }
});

module.exports = router;
