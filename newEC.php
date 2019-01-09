<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request->email;
$name = $request->name;
$num = $request->num;


$conn = new mysqli("vent.cw5pxbba6uve.us-west-2.rds.amazonaws.com", "ventadmin", "Hambone1joshpane42", "OSMIR");





$sql = "INSERT INTO emergencyContact (playerEmail, ecName, phoneNumber)
VALUES ('$email', '$name', '$num')";
if ($conn->query($sql) == TRUE) {
    echo(json_encode("Y"));
} else {
    echo(json_encode("Could Not Create Emergency Contact"));
}
$conn->close();

//echo(json_encode($outp));
?>
