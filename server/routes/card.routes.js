var router = require("express").Router();
var data = require("../data/citycard.json");


router.get("/", function (req, res) {
  res.send("Api root");
});



router.get('/getcard', function (req, res) {
  CardDeck1 = data.Card1
  CardDeck2 = data.Card2;
  CardDeck3 = data.Card3;
console.log(data)
var item = [];
  item.push(CardDeck1[Math.floor(Math.random() * CardDeck1.length)] );
  item.push(CardDeck2[Math.floor(Math.random() * CardDeck2.length)] );
  item.push(CardDeck3[Math.floor(Math.random() * CardDeck3.length)] );
          console.log(item);
        res.send(item)
    });



module.exports = router;
