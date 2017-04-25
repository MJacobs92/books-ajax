<?php include("db_connection.php");

	  error_reporting(E_ALL);
	  ini_set('display_errors', 1);
?>

<?php

$format = $_GET["format"];
$category = $_GET["category"];

$sqlQuery = "SELECT * FROM Book_Category where category = '" . $category . "';";

$returnedCategory = mysqli_query($conn, $sqlQuery);
$row = mysqli_fetch_assoc($returnedCategory);

$categoryId = $row['id'];

$sqlQuery = "SELECT Book_Title.title, Book_Author.author, Book_Year.year, Book_Price.price FROM Book_Title Join Book_Author on Book_Title.id=Book_Author.title_id Join Book_Year on Book_Title.id=Book_Year.title_id Join Book_Price On Book_Title.id=Book_Price.title_id where Book_Title.cat_id = $categoryId . ";"";


$results = mysqli_query($conn, $sqlQuery);


?>