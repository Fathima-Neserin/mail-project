var nodemailer = require('nodemailer');
var express=require('express');
var nodemon=require('nodemon');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fathimanezrin2001@gmail.com',
    pass: 'gdlr jomh cloa hcxl'
  }
});

var mailOptions = {
  from: 'fathimanezrin2001@gmail.com',
  to: 'mdrafi.cma@gmail.com',
  subject: 'Assignment purpose',
  text: 'Hello dear'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
