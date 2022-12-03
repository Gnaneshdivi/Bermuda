var router = require('express').Router();

// api/products
router.get('/connectwallet', function(req, res) {
  res.send("auth")
});
router.get('/auth_data', function(req, res) {
  res.send("auth")
});
router.get('/Nft_auth', function(req, res) {
  res.send("auth")
});



module.exports = router;