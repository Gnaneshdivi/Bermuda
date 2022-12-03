var router = require('express').Router();
var http = require('http');
var https = require('https');
const { parse } = require("dotenv");
var unirest = require('unirest');


require('dotenv').config();

router.get('/loaddata/:appid', function(req, res) {
    var secret=req.body.secret;
    /// receives data from smart contract and push to data storage graph
    
  res.send("project")
});
router.get('/readstream', function(req, res) {
    ///pulls data and push to storage graph
    
    res.send("project")
  });
router.get('/queries/:contract', function(req, res) {
    ///covelent pulls data and push to storage 
    var aa=http.get("http://abi-parser-nvk.vercel.app/api/queries/"+req.params.contract,r => {console.log(r)});

    
    res.send(aa);
});
router.get('/tables/:contract', function(req, res) {
    ///covelent pulls data and push to storage 
   var aa='';
var req = unirest('GET', 'https://abi-parser-nvk.vercel.app/api/tables/0xee2c3c7434514fbf808761eb430948bea8cf77a6')
  .end(function (r) { 
    if (r.error) throw new Error(r.error); 
    
    aa=r.raw_body;
    res.send(r.raw_body);
  });
  
});
//covelent
router.get('/readcontractdetails/:contract/:chain', function(req, res) {
    ///covelent pulls data and push to storage 
   var aa=http.get("http://api.covalenthq.com/v1/"+req.params.chain+"/events/topics/"+req.params.contract+"/?starting-block=12500000&ending-block=12500100&sender-address=0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9&key="+process.env.COVELENT_KEY,r => {console.log(r)});
   res.send(aa.body);
});
//covelent
router.get('/readwallettransactions/:wallet_id/:contract', function(req, res) {
    ///covelent pulls data and push to storage 
   var aa=http.get("https://api.covalenthq.com/v1/1/address/"+req.params.wallet_id+"/transfers_v2/?contract-address="+req.params.contract+"&key="+process.env.COVELENT_KEY,r => {console.log(r)});
   res.send(aa.body);
});
//covelent
router.get('/getbalence/:wallet_id/:contract', function(req, res) {
    ///covelent pulls data and push to storage 
   var aa=http.get("https://api.covalenthq.com/v1/"+req.params.contract+"/address/"+req.params.wallet_id+"/balances_v2/?&key="+process.env.COVELENT_KEY,r => {console.log(r)});
   res.send(aa.body);
});
//covelent
https://api.covalenthq.com/v1/1/address/demo.eth/balances_v2/?key=ckey_530f50467f0f406798920b4405a
router.get('/getchains', function(req, res) {
    ///covelent pulls data and push to storage 
   var aa=http.get("https://api.covalenthq.com/v1/chains/?quote-currency=USD&format=JSON&key="+process.env.COVELENT_KEY,r => {console.log(r)});
   res.send(aa.body);
});


module.exports = router;