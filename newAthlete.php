<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request->email;
$name = $request->name;
$pass = $request->password;
$allergies = $request->allergies;
$conditions = $request->conditions;
$status = $request->status;


$conn = new mysqli("vent.cw5pxbba6uve.us-west-2.rds.amazonaws.com", "ventadmin", "Hambone1joshpane42", "OSMIR");


//HASH THE PASSWORD VERY IMPORTANT
$hashpass = password_hash($pass, PASSWORD_DEFAULT);




$sql = "INSERT INTO player (playerEmail, password_ID, playerStatus, playerName, allergies, conditions)
VALUES ('$email', '$hashpass', '$status', '$name', '$allergies', '$conditions')";
if ($conn->query($sql) == TRUE) {
    echo(json_encode("Y"));
} else {
    echo(json_encode("Could Not Create User"));
}
$conn->close();

//echo(json_encode($outp));
?>
