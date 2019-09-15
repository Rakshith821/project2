var express = require('express')
var app = express()

var requestTime = function (req, res, next) {
  var currentDate = new Date();
  var hours= currentDate.getHours();
  var minutes = currentDate.getMinutes(); 
  var seconds = currentDate.getSeconds();
  req.requestTime = `${hours}:${minutes}:${seconds}`;
  next()
}

app.use(requestTime)

app.get('/', function (req, res) {
  var responseText = 'Hello World!<br><a href="/home">Home</a><br><a href="/about">About</a><br><a href="/details">Details</a>'
  res.send(responseText)
})

app.get('/home', function (req, res) {
  var responseText = 'Home<br>'
  responseText += `<span>Requested at: ${req.requestTime} </span>`
  res.send(responseText)
})

app.get('/about', function (req, res) {
  var responseText = 'About<br>'
  responseText += `<span>Requested at: ${req.requestTime} </span>`
  res.send(responseText)
})

app.get('/details', function (req, res) {
  var responseText = 'Details<br>'
  responseText += `<span>Requested at: ${req.requestTime} </span>`
  res.send(responseText)
})

app.listen(3000)