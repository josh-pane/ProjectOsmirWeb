<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request->email;
$pass = $request->password;


$conn = new mysqli("vent.cw5pxbba6uve.us-west-2.rds.amazonaws.com", "ventadmin", "Hambone1joshpane42", "OSMIR");



$result = $conn->query("SELECT * FROM trainer WHERE trainerEmail='$email'");
if (mysqli_num_rows($result)==0){
 echo(json_encode($email));
}else{

//LET JSON SERIALIZER FORMAT
$rows=array();
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
//  $rows[] = $rs;
  $hashPass = $rs['password_ID'];

  if (password_verify($pass, $hashPass)) {
    $returnVal='Y';
     echo(json_encode($returnVal));
  } else {
    $returnVal='N';
     echo(json_encode($returnVal));
  }
}




//$outp ='{"records":[{'.$outp.'}]}';
}
$conn->close();

//echo(json_encode($outp));
?>
