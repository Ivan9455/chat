<?php
require_once("db.php");

$sqlget = "SELECT * FROM `chat_user`";
$result = mysql_query($sqlget, $con);

while ($row = mysql_fetch_array($result)) {
    print_r($row['name'] . " : " . $row['message'] . "<br>");
}
require_once("db_close.php");



?>