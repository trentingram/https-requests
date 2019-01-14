const https = require('https')

const requestOptions = {
    option1: {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    },
    option2: {
        host: 'sytantris.github.io',
        path: '/http-examples/step3.html'
    }
  };

function getAndPrintHTML (options) {
    
https.get(options, function(response){
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
  getAndPrintHTML(requestOptions.option2)