var fs = require('fs');
var xlstojson = require("xls-to-json");

var config={
  source:'./demo.xls',
  destination:'output.json'
}


xlstojson({
  input: config.source,  // input xls
  output: config.destination, // output json
  lowerCaseHeaders:true
}, function(err, result) {
  if(err) {
    console.log(err);
  } else {
    console.log(result);
    console.log('File Saved');
  }
});

