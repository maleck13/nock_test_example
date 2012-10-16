var nock = require('nock');
exports.test_google =
nock('http://maps.googleapis.com')
  .get('/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=false')
  .reply(200, "{\n   \"results\" : [\n      {\n         \"address_components\" : [\n            {\n               \"long_name\" : \"1600\",\n               \"short_name\" : \"1600\",\n               \"types\" : [ \"street_number\" ]\n            },\n            {\n               \"long_name\" : \"Amphitheatre Pkwy\",\n               \"short_name\" : \"Amphitheatre Pkwy\",\n               \"types\" : [ \"route\" ]\n            },\n            {\n               \"long_name\" : \"Mountain View\",\n               \"short_name\" : \"Mountain View\",\n               \"types\" : [ \"locality\", \"political\" ]\n            },\n            {\n               \"long_name\" : \"Santa Clara\",\n               \"short_name\" : \"Santa Clara\",\n               \"types\" : [ \"administrative_area_level_2\", \"political\" ]\n            },\n            {\n               \"long_name\" : \"California\",\n               \"short_name\" : \"CA\",\n               \"types\" : [ \"administrative_area_level_1\", \"political\" ]\n            },\n            {\n               \"long_name\" : \"United States\",\n               \"short_name\" : \"US\",\n               \"types\" : [ \"country\", \"political\" ]\n            },\n            {\n               \"long_name\" : \"94043\",\n               \"short_name\" : \"94043\",\n               \"types\" : [ \"postal_code\" ]\n            }\n         ],\n         \"formatted_address\" : \"1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA\",\n         \"geometry\" : {\n            \"location\" : {\n               \"lat\" : 37.42214910,\n               \"lng\" : -122.08602490\n            },\n            \"location_type\" : \"ROOFTOP\",\n            \"viewport\" : {\n               \"northeast\" : {\n                  \"lat\" : 37.42349808029149,\n                  \"lng\" : -122.0846759197085\n               },\n               \"southwest\" : {\n                  \"lat\" : 37.42080011970850,\n                  \"lng\" : -122.0873738802915\n               }\n            }\n         },\n         \"types\" : [ \"street_address\" ]\n      }\n   ],\n   \"status\" : \"OK\"\n}\n", { 'content-type': 'application/json; charset=UTF-8',
  date: 'Tue, 16 Oct 2012 05:40:19 GMT',
  expires: 'Wed, 17 Oct 2012 05:40:19 GMT',
  'cache-control': 'public, max-age=86400',
  vary: 'Accept-Language',
  server: 'mafe',
  'x-xss-protection': '1; mode=block',
  'x-frame-options': 'SAMEORIGIN',
  'transfer-encoding': 'chunked' });

