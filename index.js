var https = require('https')

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getAndPrintHTMLChunks () {

https.get(requestOptions, function(response){

    response.setEncoding('utf8')

    response.on('error', function (err){
        console.log(`${err}`)
    })

    response.on('data', function(data){
        console.log(`Data length is: ${data.length}`)
    })

  })

  }
  getAndPrintHTMLChunks()