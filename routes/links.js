var express = require('express');
var router = express.Router();

var db = require('mongojs').connect("localhost:27017/poc-az").collection("mappings");

function _redirectToUrl(res, id){
  db.find({'id': parseInt(id)}, function (err, result) {
    if (err) {
      return res.send(500);
    } else {
      if(!result || result.length == 0) return res.send(422, 'No Url assigned to that id');
      return res.redirect(result[0].url);
    }
  });
}

router.get('/', function(req, res, next) {
  req.query.id ? _redirectToUrl(res, req.query.id) : res.send("provide Id");
});

module.exports = router;
