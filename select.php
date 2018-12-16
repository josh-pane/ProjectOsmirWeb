<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


$conn = new mysqli("vent.cw5pxbba6uve.us-west-2.rds.amazonaws.com", "ventadmin", "Hambone1joshpane42", "OSMIR");



$result = $conn->query("SELECT trainerName FROM trainer");


//LET JSON SERIALIZER FORMAT
$rows=array();
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  $rows[] = $rs;
    // if ($outp != "") {$outp .= ",";}
    // $outp .= '"Name":"'  . $rs['trainerName'] . '"';
}
// $outp ='{"records":[{'.$outp.'}]}';

$conn->close();

echo(json_encode($rows));
?>
