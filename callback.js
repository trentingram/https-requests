const https = require('https')

const requestOptions = {
    step2: {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    },
    step3: {
        host: 'sytantris.github.io',
        path: '/http-examples/step3.html'
    },
    step4: {
        host: 'sytantris.github.io',
        path: '/http-examples/step4.html'
    }
  };

  function getHTML (options, callback) {

    https.get(options, function(response){

        var body = ''

        response.on('error', function (err){
            console.log(err)
        })
    
        response.on('data', function (data){
            body += data
        })
    
        response.on('end', function () {
            callback(body)
        })
   })
}

function printHTML (html) {
    console.log(html);
  }

getHTML(requestOptions.step4, printHTML)