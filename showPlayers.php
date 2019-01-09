<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("vent.cw5pxbba6uve.us-west-2.rds.amazonaws.com", "ventadmin", "Hambone1joshpane42", "OSMIR");
//$data = json_decode(file_get_cont


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$sport = $request->sport;


$sel = $conn->query("SELECT playerName, playerStatus, playerEmail FROM player Natural Join playerToSport where sport = '$sport'");
$data = array();
while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("playerName"=>$row['playerName'], "playerStatus"=>$row['playerStatus'], "playerEmail"=>$row['playerEmail']);
}
echo(json_encode($data));

$conn->close();

//echo(json_encode($outp));
?>
