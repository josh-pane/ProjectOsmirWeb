<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request->email;
$name = $request->name;
$pass = $request->password;
$sport = $request->sport;


$conn = new mysqli("vent.cw5pxbba6uve.us-west-2.rds.amazonaws.com", "ventadmin", "Hambone1joshpane42", "OSMIR");
$hashpass = password_hash($pass, PASSWORD_DEFAULT);

$sql = "INSERT INTO trainer (trainerEmail, password_ID, admin, sport, trainerName)
VALUES ('$email', '$hashpass', 0, '$sport', '$name')";


if ($conn->query($sql) == TRUE) {
    console.log(json_encode("Worked"));
} else {
    console.log(json_encode("Did not work"));
}
$conn->close();

//echo(json_encode($outp));
?>
