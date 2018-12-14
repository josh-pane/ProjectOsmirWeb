<?php

$connect = mysqli_connect("vent.cw5pxbba6uve.us-west-2.rds.amazonaws.com", "ventadmin", "Hambone1joshpane42", "OSMIR");
$data = json_decode(file_get_contents("php://input"));
if(count($data) > 0){
  $sport = mysqli_real_escape_string($connect, $data->sport);
  $query = "Select * from trainer where sport='$sport'";
  if(mysqli_query($connect, $query))
  {
    echo "Worked";
  }else{
    echo "Did Not Work";
  }
}




 ?>

<!-- 
var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var mysql = require('mysql');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
const bcrypt = require('bcrypt'); //Hashing passwords
const uuidv4 = require('uuid/v4');
var moment = require('moment');
var dateFormat = require('dateformat');
console.log("this");

//Creating a SQL connection
var con = mysql.createConnection({

    host: "vent.cw5pxbba6uve.us-west-2.rds.amazonaws.com",
    user: "ventadmin",
    password: "Hambone1joshpane42",
    database: 'ventdb'
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  }); -->
