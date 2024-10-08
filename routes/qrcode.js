const router = require("express").Router();
const axios = require("axios");
const qrcodecheck = require("../check/qrcode");

router.route("/:q").get(qrcodecheck, (req, res) => {
  const location = req.params.q;
  if (location) {
    // try{
    // 	axios.get(`https://api.qrserver.com/v1/create-qr-code/?data=${location}&size=100x100`)
    // 	.then((result)=>{
    // 		res.send(result.data);
    // 	})
    // 	.catch(err=>{
    // 		res.status(400).json({message:"Unable to Convert."});
    // 	})
    //   }
    //   catch(e){
    // 	res.status(500).json("Error Occured in Backend")
    //   }
    try {
      axios
        .get(`https://quickchart.io/qr?text=${location}&format=svg`)
        .then((result) => {
          res.send(result.data);
        })
        .catch((err) => {
          res.status(400).json({ message: "Unable to Convert." });
        });
    } catch (e) {
      res.status(500).json("Error Occured in Backend");
    }
  } else {
    res.status(402).json("param required for generate qr code.");
  }
});

module.exports = router;
