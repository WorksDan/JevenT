<?php

try {
    // Mysqli db connection
    $serverName = "localhost";
    $userId = "root";
    $DbPassword = "";
    $Db_Name = "dbtest";

    $sql_conn = mysqli_connect($serverName, $userId, $DbPassword, $Db_Name);
    echo 'Connected to the database '.$Db_Name.' successfully.' . '  ';
    
    
} catch (Exception $e) {
    die ("database is not linked properly");
}

// HTML name tag stored in PHP
// $var1 = "php is working";
// $var2 = "php is working";
// $var3 = "php is working";


// Mysqli insert Injection
try{
    $sql = "INSERT INTO `test-base` (col1, col2, col3) VALUES ('$var2', '$var2', '$var2')";
    $result = mysqli_query($sql_conn, $sql);
} catch(Exception $e){
    echo 'record not inserted.';
}

// Note, this database linking runs as soon as the page loads
   

