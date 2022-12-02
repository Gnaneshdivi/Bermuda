var router = require('express').Router();

// api/products
router.get('/', function(req, res) {
  res.send("dashboard")
});


module.exports = router;