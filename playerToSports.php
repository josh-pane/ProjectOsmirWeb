<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request[0];

$length = count($request);

$conn = new mysqli("vent.cw5pxbba6uve.us-west-2.rds.amazonaws.com", "ventadmin", "Hambone1joshpane42", "OSMIR");


$sql = "INSERT INTO playerToSport (sport, playerEmail) VALUES  ";

    for($x = 1; $x < $length; $x++){
          if ($x == $length-1){
              $sql .= "('".$request[$x]."', '".$email."');";
          }else{
              $sql .= "('".$request[$x]."', '".$email."'),";
          }
      }
  if ($conn->query($sql) == TRUE) {
      echo(json_encode("Y"));
  } else {
      echo(json_encode($sql));
  }



$conn->close();

//echo(json_encode($outp));
?>
