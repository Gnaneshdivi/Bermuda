var router = require('express').Router();

// api/products
router.get('/', function(req, res) {
  res.send("profile")
});


module.exports = router;