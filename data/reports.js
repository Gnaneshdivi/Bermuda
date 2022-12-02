var router = require('express').Router();
router.get('generatereport', function(req, res) {
    var secret=req.body.secret;
    /// receives data and push to data storage
  res.send("project")
});



module.exports = router;