<?php
require_once ("db.php");
$name = $_POST['name'];
$message = $_POST['message'];
$sql = "INSERT INTO `chat_user`(`name`, `message`) VALUES ('".$name."','".$message."') ";
$result = mysql_query($sql, $con);
require_once("db_close.php");
?>