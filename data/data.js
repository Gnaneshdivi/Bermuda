var router = require('express').Router();
router.get('/loaddata/:appid', function(req, res) {
    var secret=req.body.secret;
    /// receives data and push to data storage
  res.send("project")
});
router.get('/readstream', function(req, res) {
    ///covelent pulls data and push to storage 
    res.send("project")
  });
router.get('/viewdata', function(req, res) {
    ///covelent pulls data and push to storage 
    res.send("project")
});


module.exports = router;