<!-- <?php

// $con = mysqli_connect("vent.cw5pxbba6uve.us-west-2.rds.amazonaws.com", "ventadmin", "Hambone1joshpane42", "OSMIR");
// //$data = json_decode(file_get_contents("php://input"));
// $sel = mysqli_query($con,"select * from trainer");
// $data = array();
//
//
// while ($row = mysqli_fetch_array($sel)) {
//  $data[] = array("trainerEmail"=>$row['trainerEmail'],"sport"=>$row['sport'],"trainerName"=>$row['trainerName']);
// }
// echo json_encode($data);
?>

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
