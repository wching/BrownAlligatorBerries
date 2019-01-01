import _ from 'lodash';

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// // Import the appropriate service and chosen wrappers
// const {
//   dialogflow,
//   Image,
// } = require('actions-on-google')

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
