var router = require('express').Router();

// api/products
router.get('/viewprojects/:wallet', function(req, res) {
  res.send("project")
});
router.get('/createproject/', function(req, res) {
  res.send("projectid,projectsecret")
});
router.get('/stopproject/', function(req, res) {
  res.send("projectid,projectsecret")
});

module.exports = router;