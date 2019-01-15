var request = require('request');
var fs = require('fs');

// Create a new .js file and using request, make a 'GET' request to 'https://sytantris.github.io/http-examples/future.jpg' using chaining. The chain should:
// Use .on('error') to handle any errors
// Use .on('response') to log the HTTPS response code, response message (response.statusMessage) and content type (response.headers['content-type'])
// Use piping and fs.createWriteStream to save the file to your working directory ('./future.jpg')

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    console.log(err)
  })
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log(response.statusMessage)
    console.log(response.headers['content-type']) // 'image/png'
  })
  .pipe(fs.createWriteStream('./future.jpg'))