<?php
header('Content-Type:text/html; charset=utf-8');
require("../conn.php"); 

$query="SELECT i_title,i_img,i_subtitle,i_count,i_people,i_price from app ORDER BY i_id asc ";
$result=mysql_query($query);
if(!$result)
    die("SQL: {$query}<br>Error:".mysql_error());

while($row=mysql_fetch_array($result)){
	$json[]=$row;
		}
	
	echo @json_encode($json, JSON_UNESCAPED_UNICODE);
	exit;
	
?>

