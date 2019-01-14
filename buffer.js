var https = require('https')

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

function getAndPrintHTMLChunks () {
    
https.get(requestOptions, function(response){
    var body = ''
    response.on('error', function (err){
        console.log(`This is your error: ${err}`)
    })

    response.on('data', function (data){
        body += data
    })

    response.on('end', function (){
        console.log(body)
    })
  })
  }
  getAndPrintHTMLChunks()