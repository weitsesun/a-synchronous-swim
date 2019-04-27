const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  var command = randomCommand();
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  res.write(command);
  res.end();
};

//return a random command
function randomCommand() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  var commands = ['up', 'down', 'right', 'left'];
  var i = getRandomInt(4);
  return commands[i];
}