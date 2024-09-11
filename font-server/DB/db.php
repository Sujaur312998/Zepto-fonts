<?php
// Set CORS headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/plain');


// Include the database class
require './Database.php';

// Create a new database connection
$db = new Database();

// Define table names
$uploaded_font = "uploaded_font";
$font_groups = "font_groups";

// Define table creation queries
$create_uploaded_font_table = "CREATE TABLE $uploaded_font (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    location VARCHAR(255) NOT NULL
)";

$create_font_groups_table = "CREATE TABLE $font_groups (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    location VARCHAR(255) NOT NULL
)";

// Create tables if they do not exist
$db->createTableIfNotExists($uploaded_font, $create_uploaded_font_table);
$db->createTableIfNotExists($font_groups, $create_font_groups_table);

// Close the database connection
$db->close();
?>
