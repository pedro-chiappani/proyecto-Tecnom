
var fs = require('fs')
var path = require('path')


var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
 
// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())
 
// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  next()
});
 
 
/*
 * Example get method *
 **/
 
 app.get('/', function(req, res) {
  // var html = fs.readFileSync('./index.html', 'utf8')  
  // res.render('test', { html: html })
  res.json({"data":"Hola mundo"}).sendFile(path.resolve('./index.html'))
  
  // Add your code here
  // res.send(`<html>
  // <head>
  // <title>Demonstration HTML Test Page</title>
  // </head>
  // <frameset	rows = "115, *">
 
  //     <frame	name = "Header"
  //         src = "header.html"
  //         noresize
  //         marginwidth = 4
  //         marginheight = 0
  //         scrolling = "no">
 
  //     <frameset	cols = "50%,*">
 
  //         <frame	name = "Source"
  //             src = "source.html">
 
  //         <frame	name = "Result"
  //             src = "result.html">
 
  //     </frameset>
  // </frameset>
 
  // <noframes>
 
  // <body bgcolor=#ffcccc>
  // <h1 style=align:center>
  // Frames and JavaScript Required!
  // </h1>
  // <p style="text-indent:20px">
  // This page uses both frames and JavaScript, to enable users to type in
  // their own HTML and then display it side by side with the source. You will
  // need Netscape 3 or later, or IE4 or later (or a compatible browser that
  // recognizes both frames and JavaScript) in order to make use of this page.
  // </p>
  // </body>
 
  // </noframes>
 
  // </html>
 
  // `);
});

app.post('/singup', function(req,res){
  const body = req.data
  res.status(200).json({"Message": body})
});
 
app.listen(3000, function() {
    console.log("App started")
});
 
// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
