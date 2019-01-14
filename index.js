var https = require('https')

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getAndPrintHTMLChunks () {
let body = '';

https.get(requestOptions, function(response){

    response.setEncoding('utf8')

    response.on('error', function (err){
        console.log(`This is your error: ${err}`)
    })

    response.on('data', function (data){
        console.log(`Here is some data: ${data}`)
        
    })

    response.on('end', function (){
        console.log('This is the end of this chunk')
    })

    response.on('finish', function (){
        console.log('That is the end!')
    })

  })
return body
  }
  getAndPrintHTMLChunks()