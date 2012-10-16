/**
 * Created with JetBrains WebStorm.
 * User: craigbrookes
 * Date: 16/10/2012
 * Time: 05:44
 * To change this template use File | Settings | File Templates.
 */
var request = require('request');
var test = require('tap').test;
var nock = require('nock');
var realUrl = "http://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=false";
var fs = require('fs');


//test("something remote", function(t){
//  nock.restore();
//  nock.recorder.rec();
//  t.plan(1);
//  request.get(realUrl, function (err, res, body){
//    fs.writeFileSync("./mocks/mock_something_remote.js","exports.test_google = "+nock.recorder.play()+"\n");
//    t.ok(200, res.statusCode);
//    nock.recorder.clear();
//  });
//
//});
test("something not remotely", function (t) {
  var scope = require('./mocks/mock_something_remote.js');

  var options = { uri:realUrl, onResponse:true };
  request(options, function (err, res, body) {
    if (err) {
      throw err;
    }

    res.setEncoding('utf8');
    t.equal(res.statusCode, 200);

    t.end();
  });
});



