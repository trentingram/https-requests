const https = require('https')

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



// getHTML(requestOptions.step4, printHTML)

module.exports = getHTML