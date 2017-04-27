<?php include("db_connection.php");

	  error_reporting(E_ALL);
	  ini_set('display_errors', 1);
      
      
if(isset($_GET['format'])){
	$format = $_GET["format"];
}
else{
	$format = 'xml';
}

if(isset($_GET['category']))
{
   $category = $_GET["category"];

	$sqlQuery = "SELECT * FROM Book_Category where name = '" . $category . "';";

	$returnedCategory = mysqli_query($conn, $sqlQuery);
	$row = mysqli_fetch_assoc($returnedCategory);

	$categoryId = $row['id'];

	$sqlQuery = "SELECT Book_Category.name, Book_Title.title, Book_Author.author, Book_Year.year, Book_Price.price FROM Book_Title JOIN Book_Category ON Book_Title.cat_id=Book_Category.id JOIN Book_Author ON Book_Title.id=Book_Author.title_id JOIN Book_Year ON Book_Title.id=Book_Year.title_id JOIN Book_Price ON Book_Title.id=Book_Price.title_id WHERE Book_Title.cat_id = $categoryId ;";

	$results = mysqli_query($conn, $sqlQuery);

	$rows=mysqli_fetch_all($results,MYSQLI_ASSOC);

	$books = [ "books" => $rows];

	if ($format == "json") {
		header("Content-type: application/json");
		echo json_encode($books);
	}
	else{

		header("Content-type: application/xml");

		$doc = new DOMDocument();
		$doc->formatOutput = true;

		$r = $doc->createElement( "books" );
		$doc->appendChild( $r );

		foreach( $books['books'] as $book )
		{
			$b = $doc->createElement("book");

			$category = $doc->createElement("category");
			$category->appendChild($doc->createTextNode($book['name']));
			$b->appendChild($category);

			$title = $doc->createElement("title");
			$title->appendChild($doc->createTextNode($book['title']));
			$b->appendChild($title);

			$author = $doc->createElement("author");
			$author->appendChild($doc->createTextNode($book['author']));
			$b->appendChild($author);

			$year = $doc->createElement("year");
			$year->appendChild($doc->createTextNode($book['year']));
			$b->appendChild($year);

			$price = $doc->createElement("price");
			$price->appendChild($doc->createTextNode($book['price']));
			$b->appendChild($price);

			$r->appendChild($b);
		}

		echo $doc->saveXML();
	}
}
else {

	$sqlQuery = "SELECT * FROM Book_Category ;";
	$returnedCategories = mysqli_query($conn, $sqlQuery);

	$rows=mysqli_fetch_all($returnedCategories,MYSQLI_ASSOC);

	$categories = [ "categories" => $rows];

	if ($format == "json") {
	header("Content-type: application/json");
		echo json_encode($categories);
	}
	else{
		header("Content-type: application/xml");

		$doc = new DOMDocument();
		$doc->formatOutput = true;

		$r = $doc->createElement( "categories" );
		$doc->appendChild( $r );

		foreach( $categories['categories'] as $category )
		{
			$b = $doc->createElement("category");

			$id = $doc->createElement("id");
			$id->appendChild($doc->createTextNode($category['id']));
			$b->appendChild($id);

			$name = $doc->createElement("name");
			$name->appendChild($doc->createTextNode($category['name']));
			$b->appendChild($name);

			$r->appendChild($b);
		}

		echo $doc->saveXML();
	}

}




?>