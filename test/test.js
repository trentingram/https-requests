var getHTML = require('../http-functions');

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
    },
    step5: {
        host: 'sytantris.github.io',
        path: '/http-examples/step5.html'
    }
  };

  function printHTML (html) {
    console.log(html);
  }

  getHTML(requestOptions.step5, printHTML)
