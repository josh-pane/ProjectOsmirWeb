<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("vent.cw5pxbba6uve.us-west-2.rds.amazonaws.com", "ventadmin", "Hambone1joshpane42", "OSMIR");
//$data = json_decode(file_get_contents("php://input"));

$sel = $conn->query("SELECT * FROM listOfSports");
$data = array();
while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("sport"=>$row['sport']);
}
echo(json_encode($data));

$conn->close();

//echo(json_encode($outp));
?>
